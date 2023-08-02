import { getAll, getById, add } from "./referalsService.js";

export const getAllReferals = function (req, res) {
  const referals = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(referals));
};

export const getUserReferals = function (req, res) {
  const userId = req.url.split("/")[2];
  const userReferals = getById(userId);

  if (userReferals) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(userReferals));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end("User not found");
  }
};

export const addReferal = function (req, res) {
  const userId = req.url.split("/")[2];

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const { username } = JSON.parse(body);
    const addedUser = add(userId, username);

    if (addedUser) {
      res.writeHead(201, { "Content-type": "application/json" });
      res.end(`User: ${JSON.stringify(addedUser)} added successfully`);
    } else {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end("User not found");
    }
  });
};
