import { userExists } from "./loginService.js";

export const validateUser = function (req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    try {
      const { username } = JSON.parse(body);

      if (userExists(username)) {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end("Successful login");
      } else {
        res.writeHead(401, { "Content-type": "application/json" });
        res.end("Invalid credentials");
      }
    } catch (err) {
      res.writeHead(400, { "Content-type": "application/json" });
      res.end("Bad Request");
    }
  });
};
