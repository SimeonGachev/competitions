import { getAllUserStats } from "./userStatsController.js";

export const handleUserStatsRequest = function (req, res) {
  if (req.method === "GET" && req.url.split("/").length === 4)
    return getAllUserStats(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
