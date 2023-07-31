import {
  getAllJeans,
  getJeansById,
  postJeans,
  putJeans,
  deleteJeansById,
} from "./jeansController.js";

export const handleJeansRequest = function (req, res) {
  if (req.url === "/jeans" && req.method === "GET") {
    getAllJeans(req, res);
  } else if (req.url.startsWith("/jeans/") && req.method === "GET") {
    getJeansById(req, res);
  } else if (req.url === "/jeans" && req.method === "POST") {
    postJeans(req, res);
  } else if (req.url.startsWith("/jeans/") && req.method === "PUT") {
    putJeans(req, res);
  } else if (req.url.startsWith("/jeans/") && req.method === "DELETE") {
    deleteJeansById(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
