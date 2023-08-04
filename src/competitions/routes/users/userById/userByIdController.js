import { getById } from "./userByIdService.js";

export const getUser = function (req, res) {
  const userId = req.params.id;

  const user = getById(userId);

  if (user) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end("User not found");
  }
};
