import { users } from "../../usersModel.js";

export const getAll = function (userId) {
  return users[userId]["stats"];
};
