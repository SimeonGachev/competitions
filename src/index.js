const port = 5000;
import { createServer } from "http";
import { handleShirtsRequest } from "./routes/shirts/shirtsRoutes.js";
import { handleJeansRequest } from "./routes/jeans/jeansRoutes.js";

const server = createServer((req, res) => {
  if (req.url.startsWith("/shirts")) handleShirtsRequest(req, res);
  else if (req.url.startsWith("/jeans")) handleJeansRequest(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${port}`);
});
