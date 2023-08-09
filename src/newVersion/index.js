import { createServer } from "http";
import { getAllCompetitions } from "./controllers/index.js";
import { router } from "./utils/routing.js";

const PORT = 3000;

router.get("/competitions", getAllCompetitions);
const server = createServer(router.handleRequest);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
