const http = require("http")
const fs = require("fs")
const port = 8080

const server = http.createServer((req,res)=>{
    res.writeHead(200, { "Content-type": "text/html"} )

    fs.readFile("index.html", (err, data) => {
        if(err){
            res.writeHead(404)
            res.write("Error")
        }
        else res.write(data)
        res.end()
    })
})

server.listen(port, (err) => {
    if(err)console.log(err)
    else console.log("server is listening on port" + port)
})