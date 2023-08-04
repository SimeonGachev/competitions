import { router } from "../../utils/routing.js";
import { logout } from "./logoutController.js";

export const createLogoutRoutes = function () {
  router.post("/logout", logout);
};
