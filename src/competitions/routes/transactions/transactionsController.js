import { getAll, getById, add } from "./transactionsService.js";

export const getAllTransactions = function (req, res) {
  const transactions = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(transactions));
};

export const getUserTransactions = function (req, res) {
  const userId = req.url.split("/")[2];
  const userTransactions = getById(userId);

  if (userTransactions) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(userTransactions));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end("User not found");
  }
};

export const addTransaction = function (req, res) {
  const userId = req.url.split("/")[2];

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const addedTransaction = JSON.parse(body);
    const transaction = add(userId, addedTransaction);

    if (transaction) {
      res.writeHead(201, { "Content-type": "application/json" });
      res.end(`Transaction: ${JSON.stringify(transaction)} added successfully`);
    } else {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end("User not found");
    }
  });
};
