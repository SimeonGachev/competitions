import { router } from "../../utils/routing.js";
import {
  addTransaction,
  getUserTransactions,
} from "./transactionsController.js";

export const createTransactionRoutes = function () {
  router.get("/users/:id/transactions", getUserTransactions);

  router.post("/users/:id/transactions", addTransaction);
};
