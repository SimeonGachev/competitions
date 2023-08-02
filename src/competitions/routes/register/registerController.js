import { addUser } from "./registerService.js";

export const createNewAccount = function (req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const { username } = JSON.parse(body);
    const newUser = addUser(username);

    if (newUser) {
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(`Account: ${JSON.stringify(newUser)} created succesfully`);
    } else {
      res.writeHead(404, { "Content-type": "application/json" });
      res.end("User already exists");
    }
  });
};
