import { users } from "../users/usersModel.js";
import { loggedUser } from "./loginModel.js";

export const userExists = function (reqUsername) {
  for (let userId in users) {
    const { username } = users[userId];

    if (username === reqUsername) {
      loggedUser.id = userId;
      loggedUser.username = username;

      return true;
    }
  }
  return false;
};
