import { logoutUser } from "./logoutService.js";

export const logout = function (req, res) {
  const loggedOutUser = logoutUser();

  if (loggedOutUser) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Logged out successfully");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("Already logged out");
  }
};
