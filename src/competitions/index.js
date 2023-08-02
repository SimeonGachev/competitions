import { createServer } from "http";
import { handleUsersRequest } from "./routes/users/usersRoutes.js";
import { handleCompetitionsRequest } from "./routes/competitions/competitionsRoutes.js";
import { handleLoginRequests } from "./routes/login/loginRoutes.js";
import { handleReferalRequest } from "./routes/referals/referalsRoutes.js";
const PORT = 5000;

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Main Page");
  } else if (req.url.startsWith("/users")) return handleUsersRequest(req, res);
  else if (req.url.startsWith("/competitions"))
    return handleCompetitionsRequest(req, res);
  else if (req.url.startsWith("/login")) return handleLoginRequests(req, res);
  else if (req.url.startsWith("/referals"))
    return handleReferalRequest(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
