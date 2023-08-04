import { getAllUsers } from "./usersController.js";
import { createUserByIdRoutes } from "./UserById/userByIdRoutes.js";
import { router } from "../../utils/routing.js";

export const createUsersRoutes = function () {
  router.get("/users", getAllUsers);

  createUserByIdRoutes();
};
