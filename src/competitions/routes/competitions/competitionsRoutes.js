import { router } from "../../utils/routing.js";
import {
  closeCompetition,
  createCompetition,
  getAllCompetitions,
  getCompetition,
  joinCompetition,
} from "./competitionsController.js";

export const createCompetitionsRoutes = function () {
  router.get("/competitions", getAllCompetitions);

  router.post("/competitions", createCompetition);

  router.get("/competitions/:id", getCompetition);

  router.post("/competitions/:id/join", joinCompetition);

  router.put("/competitions/:id/close", closeCompetition);
};
