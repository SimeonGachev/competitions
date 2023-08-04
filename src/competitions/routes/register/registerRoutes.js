import { router } from "../../utils/routing.js";
import { createNewAccount } from "./registerController.js";

export const createRegisterRoutes = function () {
  router.post("/register", createNewAccount);
};
