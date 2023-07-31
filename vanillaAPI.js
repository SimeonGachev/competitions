const http = require("http");
const port = 5000;
const endpointsList = require("./endpointsList.js");
const accessoryFunctions = require("./accessoryFunctions.js");

const server = http.createServer((req, res) => {
  const reqMethod = endpointsList.allEndpoints.find((x) => {
    return (
      x.name === req.method && accessoryFunctions.matchPath(req.url, x.path)
    );
  });
  if (reqMethod) reqMethod.execute(req, res);
  else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ status: "error", message: "Invalid Method" }));
  }
});

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${port}`);
});
