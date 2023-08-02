import { loggedUser } from "../login/loginModel.js";

export const logoutUser = function () {
  if (!loggedUser.id) return false;

  loggedUser.id = null;
  loggedUser.username = null;

  return true;
};
