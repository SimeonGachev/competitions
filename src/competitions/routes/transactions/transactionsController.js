import { getAll, getById, add } from "./transactionsService.js";

export const getAllTransactions = function (req, res) {
  const transactions = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(transactions));
};

export const getUserTransactions = function (req, res) {
  const userId = req.params.id;
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
  const userId = req.params.id;

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const addedTransaction = JSON.parse(body);
      const transaction = add(userId, addedTransaction);

      if (transaction) {
        res.writeHead(201, { "Content-type": "application/json" });
        res.end(
          `Transaction: ${JSON.stringify(transaction)} added successfully`
        );
      } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end("User not found");
      }
    } catch (err) {
      res.writeHead(400, { "Content-type": "application/json" });
      res.end("Bad Request");
    }
  });
};
