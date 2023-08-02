import { getAllUsers } from "./usersController.js";
import { handleUserByIdRequest } from "./UserById/userByIdRoutes.js";

export const handleUsersRequest = function (req, res) {
  if (req.url === "/users" && req.method === "GET")
    return getAllUsers(req, res);
  else if (req.url.startsWith("/users/"))
    return handleUserByIdRequest(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
