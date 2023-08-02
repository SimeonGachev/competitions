import { users } from "../users/usersModel.js";
import { transactionsList } from "../transactions/transactionsModel.js";
import { referalsList } from "../referals/referalsModel.js";

export const addUser = function (addedUsername) {
  let len = 1;
  for (let key in users) {
    const { username } = users[key];

    if (username === addedUsername) return null;
    len++;
  }

  referalsList[len] = [];
  transactionsList[len] = [];
  users[len] = {
    username: addedUsername,
    stats: {
      wins: 0,
      bestScore: 0,
      archive: [],
    },
  };

  return users[len];
};
