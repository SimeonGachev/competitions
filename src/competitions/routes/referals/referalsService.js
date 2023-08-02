import { referalsList } from "./referalsModel.js";

export const getAll = function () {
  return referalsList;
};

export const getById = function (userId) {
  if (userId in referalsList) return referalsList[userId];

  return null;
};

export const add = function (userId, addedUserUsername) {
  if (!(userId in referalsList)) return null;
  if (!addedUserUsername) return null;
  if (referalsList[userId].find((username) => username === addedUserUsername))
    return null;

  referalsList[userId].push(addedUserUsername);
  return referalsList[userId];
};
