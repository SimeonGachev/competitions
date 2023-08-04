import { createServer } from "http";
import { handleUsersRequest } from "./routes/users/usersRoutes.js";
import { handleCompetitionsRequest } from "./routes/competitions/competitionsRoutes.js";
import { handleLoginRequests } from "./routes/login/loginRoutes.js";
import { handleReferalRequest } from "./routes/referals/referalsRoutes.js";
import { handleLogoutRequests } from "./routes/logout/logoutRoutes.js";
import { handleTransactionsRequest } from "./routes/transactions/transactionsRoutes.js";
import { handleRegisterRequest } from "./routes/register/registerRoutes.js";
import { router } from "./utils/routing.js";
import { getAllUsers } from "./routes/users/usersController.js";
const PORT = 5000;

router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end(`The id is ${id}`);
});

const server = createServer(router.handleRequest);

// const server = createServer((req, res) => {
//     if (req.url === "/") {
//       res.writeHead(200, { "Content-type": "text/plain" });
//       res.end("Main Page");
//     } else if (req.url.startsWith("/users")) return handleUsersRequest(req, res);
//     else if (req.url.startsWith("/competitions"))
//       return handleCompetitionsRequest(req, res);
//     else if (req.url.startsWith("/login")) return handleLoginRequests(req, res);
//     else if (req.url.startsWith("/logout")) return handleLogoutRequests(req, res);
//     else if (req.url.startsWith("/register"))
//       return handleRegisterRequest(req, res);
//     else if (req.url.startsWith("/referals"))
//       return handleReferalRequest(req, res);
//     else if (req.url.startsWith("/transactions"))
//       return handleTransactionsRequest(req, res);
//     else {
//       res.writeHead(404, { "Content-Type": "text/plain" });
//       res.end("Route not found");
//     }
// });

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
