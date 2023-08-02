import { transactionsList } from "./transactionsModel.js";

export const getAll = function () {
  return transactionsList;
};

export const getById = function (userId) {
  if (userId in transactionsList) return transactionsList[userId];

  return null;
};

export const add = function (userId, addedTransaction) {
  if (!(userId in transactionsList)) return null;

  transactionsList[userId].push(addedTransaction);
  return transactionsList[userId];
};
