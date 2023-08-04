import { router } from "../../../utils/routing.js";
import { getUser } from "./userByIdController.js";
import { createUserStatsRoutes } from "./userStats/userStatsRoutes.js";

export const createUserByIdRoutes = function () {
  router.get("/users/:id", getUser);

  createUserStatsRoutes();
};
