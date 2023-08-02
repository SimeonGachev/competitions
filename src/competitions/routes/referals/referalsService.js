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
  if (!addedUserId) return null;
  if (referalsList[userId].find((id) => id === addedUserId)) return null;

  referalsList[userId].push(addedUserId);
  return referalsList[userId];
};
