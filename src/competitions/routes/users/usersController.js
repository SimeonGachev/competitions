import { getAll } from "./usersService.js";

export const getAllUsers = function (req, res) {
  const users = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(users));
};
