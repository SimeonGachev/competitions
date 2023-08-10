import { createServer } from "http";
import {
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  endCompetition,
  enterCompetition,
} from "./newVersion/controllers/index.js";
import { router } from "./newVersion/utils/routing.js";

const PORT = 3000;

router.get("/competitions", getAllCompetitions);

router.get("/competitions/:id", getCompetitionById);

router.post("/competitions", createCompetition);

router.put("/competitions/:id/end", endCompetition);

router.put("/competitions/:id/join", enterCompetition);

const server = createServer(router.handleRequest);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
