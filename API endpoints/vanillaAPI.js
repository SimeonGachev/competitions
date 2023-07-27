const http = require("http")
const querystring = require("querystring")
const port = 5000
const bodyParser = require("body-parser")

let shirts = [
    {
        "id": 1,
        "color": "red"
    },
    {
        "id": 2,
        "color": "white"
    },
    {
        "id": 3,
        "color": "yellow"
    },
    {
        "id": 4,
        "color": "blue"
    }
]

let getReqData = (req) => {
    let data = ""
    req.on("data", (chunk) => {
        data+=chunk
    })
    req.on("end", () => {
        const jsonData = JSON.parse(data)
        return jsonData
    })
}//need to return json

let getElem = function(arr, id) {
    for(let obj of arr){
        if(obj.id==id)return obj
    }
}
let updateElem = function(arr, id, updatedElements) {
    for(let i=0; i<arr.length; i++){
        if(arr[i].id==id){
            for(let key in updatedElements){
                arr[i][key] = updatedElements[key]
            }
            return arr
        }
    }
    updatedElements["id"] = id
    arr.push(updatedElements)
    arr.sort((a,b)=> a.id - b.id)
    return arr
}
let createElem = function(arr, id, newElements) {
    newElements["id"] = id
    arr.push(newElements)
    arr.sort((a,b)=> a.id - b.id)
    return arr
}
let hasId = (arr, id) => {
    for(let i=0; i<arr.length; i++){
        if(arr[i].id==id)return true
    }
    return false
}
let deleteElem = (arr, id) => {
    for(let i=0; i<arr.length; i++){
        let obj = arr[i]
        if(obj.id==id){
            arr = arr.slice(0,i).concat(arr.slice(i+1))
            return arr
        }
    }
    return arr
}

const server = http.createServer((req,res) => {
    //get all shirts
    if(req.url == "/shirts"&&req.method == "GET"){
        res.writeHead(200, { "Content-type":"application/json"} )
        res.write(JSON.stringify(shirts))
        res.end()
    }
    //get single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "GET"){
        const id = req.url.split("/")[2]
        let checkId = hasId(shirts, id)
        if(!checkId){
            res.writeHead(404, { "Content-type":"application/json"} )
            res.end(JSON.stringify({ status: 'error', message: 'id does not exist' }));
        }
        else{
            let shirt = getElem(shirts, id)
            res.writeHead(200, { "Content-type":"application/json"} )
            res.write(JSON.stringify(shirt))
            res.end()
        }
    }
    //create single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "POST"){
        let data = '';
        const id = req.url.split("/")[2]
        req.on('data', chunk => {
            // Accumulate the incoming data chunks
            data += chunk;
          });
      
          req.on('end', () => {
            // Parse the data as JSON
            try {
              const jsonData = JSON.parse(data);
              // Handle the JSON data here
              let checkId = hasId(shirts, id)
              if(checkId){
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ status: 'error', message: 'id already exists' }));
              }
              else{
                  createElem(shirts, id, jsonData)
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ status: 'success', message: 'Data received successfully' }));
              }
            } catch (error) {
              console.error('Error parsing JSON:', error);
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON data' }));
            }
          });
      
    }
    //update single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "PUT"){
        let data = '';
        const id = req.url.split("/")[2]
        req.on('data', chunk => {
        // Accumulate the incoming data chunks
        data += chunk;
        });
    
        req.on('end', () => {
        // Parse the data as JSON
            try {
                const jsonData = JSON.parse(data);
                // Handle the JSON data here
                shirts = updateElem(shirts, id, jsonData)
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'success', message: 'Data received successfully' }));
            } catch (error) {
                console.error('Error parsing JSON:', error);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON data' }));
            }
        });
      
    }
    //delete single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "DELETE"){
        const id = req.url.split("/")[2]
        let checkId = hasId(shirts, id)
        if(!checkId){
            res.writeHead(404, { "Content-type":"application/json"} )
            res.end(JSON.stringify({ status: 'error', message: 'id does not exist' }));
        }
        else{
            shirts = deleteElem(shirts, id)
            res.writeHead(200, { "Content-type":"application/json"} )
            res.end(JSON.stringify({ status: 'success', message: 'Data deleted successfully' }));
        }
    }
    else{
        res.writeHead(404, { "Content-type":"application/json"} )
        res.end(JSON.stringify({ status: 'error', message: 'Invalid Method' }));
    } 
})

server.listen(port, (err)=> {
    if(err)console.log(err)
    console.log(`I am alive on port: ${port}`)
})