import {
  getAllShirts,
  getShirtById,
  postShirt,
  putShirt,
  deleteShirtById,
} from "./shirtsController.js";

export const handleShirtsRequest = function (req, res) {
  if (req.url === "/shirts" && req.method === "GET") {
    getAllShirts(req, res);
  } else if (req.url.startsWith("/shirts/") && req.method === "GET") {
    getShirtById(req, res);
  } else if (req.url === "/shirts" && req.method === "POST") {
    postShirt(req, res);
  } else if (req.url.startsWith("/shirts/") && req.method === "PUT") {
    putShirt(req, res);
  } else if (req.url.startsWith("/shirts/") && req.method === "DELETE") {
    deleteShirtById(req, res);
  }
};
