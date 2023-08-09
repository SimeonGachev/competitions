import { createServer } from "http";
import { getAllCompetitions } from "./controllers/index.js";

const PORT = 3000;

const server = createServer(getAllCompetitions);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
