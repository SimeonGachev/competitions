import { getAll } from "./userStatsService.js";

export const getAllUserStats = function (req, res) {
  const userId = req.url.split("/")[2];
  const stats = getAll(userId);

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(stats));
};
