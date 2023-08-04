import { router } from "../../utils/routing.js";
import { validateUser } from "./loginController.js";

export const createLoginRoutes = function (req, res) {
  router.post("/login", validateUser);
};
