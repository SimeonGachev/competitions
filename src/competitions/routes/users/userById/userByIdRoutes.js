import { getUser } from "./userByIdController.js";
import { handleUserStatsRequest } from "./userStats/userStatsRoutes.js";

export const handleUserByIdRequest = function (req, res) {
  if (req.url.split("/")[3] === "stats")
    return handleUserStatsRequest(req, res);
  else if (req.method === "GET") return getUser(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
