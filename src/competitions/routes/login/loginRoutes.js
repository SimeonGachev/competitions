import { validateUser } from "./loginController.js";

export const handleLoginRequests = function (req, res) {
  if (req.url === "/login" && req.method === "POST")
    return validateUser(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};
