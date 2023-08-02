import { getAll } from "./usersService.js";

export const getAllUsers = function (req, res) {
  const users = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(users));
};

// export const getUser = function (req, res) {
//   const userId = req.url.split("/")[2];

//   const user = getById(userId);

//   if (user) {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(user));
//   } else {
//     res.writeHead(404, { "Content-type": "application/json" });
//     res.end("User not found");
//   }
// };

// export const addUser = function (req, res) {
//   let body = "";

//   req.on("data", (chunk) => {
//     body += chunk;
//   });

//   req.on("end", () => {
//     const { username } = JSON.parse(body);

//     addUser(username);
//   });
// };

// export const deleteUser = function (req, res) {
//   const userId = req.url.split("/")[2];

//   const user = deleteById(userId);

//   if (user) {
//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(user));
//   } else {
//     res.writeHead(404, { "Content-type": "application/json" });
//     res.end("User not found");
//   }
// };
