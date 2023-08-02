import { logout } from "./logoutController.js";

export const handleLogoutRequests = function (req, res) {
  if (req.url === "/logout" && req.method === "POST") return logout(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};
