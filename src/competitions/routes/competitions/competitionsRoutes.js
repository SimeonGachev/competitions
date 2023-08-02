import {
  closeCompetition,
  createCompetition,
  getAllCompetitions,
  getCompetition,
  joinCompetition,
} from "./competitionsController.js";

export const handleCompetitionsRequest = function (req, res) {
  if (req.url === "/competitions" && req.method === "GET")
    getAllCompetitions(req, res);
  else if (req.url === "/competitions" && req.method === "POST")
    createCompetition(req, res);
  else if (req.url.startsWith("/competitions/") && req.method === "GET")
    getCompetition(req, res);
  else if (req.url.startsWith("/competitions/") && req.method === "POST")
    joinCompetition(req, res);
  else if (req.url.startsWith("/competitions/") && req.method === "PUT")
    closeCompetition(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
