import { router } from "../../utils/routing.js";
import { getUserReferals, addReferal } from "./referalsController.js";

export const createReferalRoutes = function () {
  router.get("/users/:id/referals", getUserReferals);

  router.post("/users/:id/referals", addReferal);
};
