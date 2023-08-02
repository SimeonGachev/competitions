import { users } from "../users/usersModel.js";
import { loggedUser } from "./loginModel.js";

export const userExists = function (reqUsername) {
  for (let userId in users) {
    const { username } = users[userId];

    if (username === reqUsername) {
      loggedUser.loggedIn = userId;

      return true;
    }
  }
  return false;
};
