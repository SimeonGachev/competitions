import { createServer } from "http";

// Our simplified version of Express
const express = () => {
  const routes = {
    GET: {},
    POST: {},
    PUT: {},
    DELETE: {},
  };

  const get = (path, callback) => {
    routes.GET[path] = callback;
  };

  const post = (path, callback) => {
    routes.POST[path] = callback;
  };

  const put = (path, callback) => {
    routes.PUT[path] = callback;
  };

  const del = (path, callback) => {
    routes.DELETE[path] = callback;
  };

  const handleRequest = (req, res) => {
    console.log(routes);

    const { method, url } = req;

    if (routes[method][url]) {
      routes[method][url](req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  };

  return { get, post, put, delete: del, handleRequest };
};

// Create our "app" using our simplified Express
const app = express();

// Define routes for various HTTP methods
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is the home page!");
});

app.post("/data", (req, res) => {
  res.writeHead(201, { "Content-Type": "text/plain" });
  res.end("Data created successfully.");
});

app.put(`/data/:id`, (req, res) => {
  const id = req.params.id;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Data with ID ${id} updated successfully.`);
});

app.delete("/data/:id", (req, res) => {
  const id = req.params.id;
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Data with ID ${id} deleted successfully.`);
});

// Create a server using Node.js HTTP module
const server = createServer(app.handleRequest);

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
