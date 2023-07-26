const http = require("http")
const port = 5000

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

let getShirt = (id) => {
    for(let obj of shirts){
        if(obj.id==id)return obj
    }
    return "no shirt with such id found"
}
let deleteShirt = (id) => {
    for(let i=0; i<shirts.length; i++){
        let obj = shirts[i]
        if(obj.id==id){
            shirts = shirts.slice(0,i).concat(shirts.slice(i+1))
            return obj
        }
    }
    return "no shirt with such id found"
}

const server = http.createServer((req,res) => {
    //get all shirts
    if(req.url == "/shirts"&&req.method == "GET"){
        res.writeHead(200, { "Content-type":"application/json"} )
        res.write(JSON.stringify(shirts))
    }
    //get single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "GET"){
        const id = req.url.split("/")[2]
        let shirt = getShirt(id)
        if(typeof(shirt)==String){
            res.writeHead(404, { "Content-type":"application/json"} )
            res.write(JSON.stringify(shirt))
        }
        else{
            res.writeHead(200, { "Content-type":"application/json"} )
            res.write(JSON.stringify(shirt))
        }
    }
    //delete single shirt
    else if(req.url.match(/\/shirts\/\d+/)&&req.method == "DELETE"){
        console.log("DELETED")
        const id = req.url.split("/")[2]
        let shirt = deleteShirt(id)
        if(typeof(shirt)==String){
            res.writeHead(404, { "Content-type":"application/json"} )
            res.write(JSON.stringify(shirt))
        }
        else{
            res.writeHead(200, { "Content-type":"application/json"} )
            res.write(JSON.stringify(shirt))
        }
    }
    else{
        res.writeHead(404, { "Content-type":"application/json"} )
        res.write("That ai no get met")
    } 
    console.log(req.url, req.method, req.params)
    res.end()
})

server.listen(port, (err)=> {
    if(err)console.log(err)
    console.log(`I am alive on port: ${port}`)
})