import { createCompetitionsRoutes } from "./competitions/competitionsRoutes.js";
import { createLoginRoutes } from "./login/loginRoutes.js";
import { createLogoutRoutes } from "./logout/logoutRoutes.js";
import { createReferalRoutes } from "./referals/referalsRoutes.js";
import { createRegisterRoutes } from "./register/registerRoutes.js";
import { createTransactionRoutes } from "./transactions/transactionsRoutes.js";
import { createUsersRoutes } from "./users/usersRoutes.js";

export const createAllRoutes = () => {
  createCompetitionsRoutes();

  createLoginRoutes();

  createLogoutRoutes();

  createReferalRoutes();

  createRegisterRoutes();

  createTransactionRoutes();

  createUsersRoutes();
};
