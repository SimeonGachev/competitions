import { router } from "../../../../utils/routing.js";
import { getAllUserStats } from "./userStatsController.js";

export const createUserStatsRoutes = function () {
  router.get("/users/:id/stats", getAllUserStats);
};
