import { createNewAccount } from "./registerController.js";

export const handleRegisterRequest = function (req, res) {
  if (req.url === "/register" && req.method === "POST")
    return createNewAccount(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
