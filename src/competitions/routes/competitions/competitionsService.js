import { competitions } from "./competitionsModel.js";
import { users } from "../users/usersModel.js";

export const getAll = function () {
  return competitions;
};

export const getById = function (compId) {
  if (compId in competitions) return competitions[compId];

  return null;
};

export const createComp = function (userId, compName) {
  const compId = Object.values(competitions).length + 1;

  competitions[compId] = {
    organiser: users[userId],
    name: compName,
    participants: [],
    status: "Open",
    ranking: [],
  };

  return competitions[compId];
};

export const joinComp = function (userId, compId) {
  if (compId in competitions) {
    const { participants } = competitions[compId];
    const user = users[userId];

    if (!participants.find((participant) => participant === user))
      participants.push(user);
    else return null;

    return participants;
  }

  return null;
};
