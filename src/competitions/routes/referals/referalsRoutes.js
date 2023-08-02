import {
  getAllReferals,
  getUserReferals,
  addReferal,
} from "./referalsController.js";

export const handleReferalRequest = function (req, res) {
  if (req.url === "/referals" && req.method === "GET")
    return getAllReferals(req, res);
  else if (req.url.startsWith("/referals/") && req.method === "GET")
    return getUserReferals(req, res);
  else if (req.url.startsWith("/referals/") && req.method === "POST")
    return addReferal(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
