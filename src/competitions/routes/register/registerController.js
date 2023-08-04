import { addUser } from "./registerService.js";

export const createNewAccount = function (req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const { username } = JSON.parse(body);
      const newUser = addUser(username);

      if (newUser) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(`Account: ${JSON.stringify(newUser)} created succesfully`);
      } else {
        res.writeHead(404, { "Content-type": "application/json" });
        res.end("User already exists");
      }
    } catch (err) {
      res.writeHead(400, { "Content-type": "application/json" });
      res.end("Bad Request");
    }
  });
};
