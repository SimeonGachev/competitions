import { users } from "../usersModel.js";

export const getById = function (userId) {
  if (userId in users) return users[userId];

  return null;
};
