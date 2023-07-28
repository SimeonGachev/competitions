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

let jackets = [
    {
        "id": 1,
        "color": "white",
        "size": "Large"
    },
    {
        "id": 2,
        "color": "green",
        "size": "Large"
    },
    {
        "id": 3,
        "color": "red",
        "size": "Small"
    },
    {
        "id": 4,
        "color": "black",
        "size": "Small"
    }
]

let jeans = [
    {
        "id": 1,
        "color": "cyan",
        "size": "Large"
    },
    {
        "id": 2,
        "color": "magneta",
        "size": "Large"
    },
    {
        "id": 3,
        "color": "white",
        "size": "Small"
    },
    {
        "id": 4,
        "color": "brown",
        "size": "Small"
    }
]

const items = {
    "shirts":shirts,
    "jackets":jackets,
    "jeans":jeans
}

const updateElem = function(arr, id, updatedElements) {
    for(let i=0; i<arr.length; i++){

        if(arr[i].id==id){

            for(let key in updatedElements){
                arr[i][key] = updatedElements[key]
            }

            return arr
        }
    }

    updatedElements = {
        "id": id,
        ...updatedElements
    }
    arr.push(updatedElements)
    arr.sort((a,b)=> a.id - b.id)

    return arr
}

const createElem = function(arr, id, newElements) {
    newElements = {
        "id": id,
        ...newElements
    }
    arr.push(newElements)
    arr.sort((a,b)=> a.id - b.id)

    return arr
}

const deleteElem = (arr, id) => {
    for(let i=0; i<arr.length; i++){
        let obj = arr[i]

        if(obj.id==id){
            arr = arr.slice(0,i).concat(arr.slice(i+1))

            return arr
        }
    }

    return arr
}

    const endPoints = "/shirts/3".split("/");

    if(endPoints.length>=2){
        const firstEndPoint = endPoints[1];

        //get all elements from items
        if((firstEndPoint in items)&&req.method === "GET"){
            const item = items[firstEndPoint];
            // res.writeHead(200, { "Content-type":"application/json"} )
            // res.write(JSON.stringify(shirts))
            // res.end()
        }
        else{
            // res.writeHead(404, { "Content-type":"application/json"} );
            // res.end(JSON.stringify({ status: 'error', message: 'Invalid Method' }));
        }
        break;
    }
    else{

    }
        case 3:
            const firstEndPoint = endPoints[1];
            console.log(firstEndPoint)

            //get all elements from items
            // if((firstEndPoint in items)&&req.method === "GET"){
            //     const item = items[firstEndPoint];
            //     res.writeHead(200, { "Content-type":"application/json"} )
            //     res.write(JSON.stringify(shirts))
            //     res.end()
            // }
            // else{
            //     res.writeHead(404, { "Content-type":"application/json"} );
            //     res.end(JSON.stringify({ status: 'error', message: 'Invalid Method' }));
            // }
            // break;


