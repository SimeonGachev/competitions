import {
  addTransaction,
  getAllTransactions,
  getUserTransactions,
} from "./transactionsController.js";

export const handleTransactionsRequest = function (req, res) {
  if (req.url === "/transactions" && req.method === "GET")
    return getAllTransactions(req, res);
  else if (req.url.startsWith("/transactions/") && req.method === "GET")
    return getUserTransactions(req, res);
  else if (req.url.startsWith("/transactions/") && req.method === "POST")
    return addTransaction(req, res);
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
};
