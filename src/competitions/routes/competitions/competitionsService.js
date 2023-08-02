import { competitions } from "./competitionsModel.js";
import { users } from "../users/usersModel.js";

export const getAll = function () {
  return competitions;
};

export const getById = function (compId) {
  if (compId in competitions) return competitions[compId];

  return null;
};

export const createComp = function (username, compName) {
  const compId = Object.values(competitions).length + 1;

  competitions[compId] = {
    organiser: username,
    name: compName,
    participants: [],
    status: "Open",
    scores: {},
    ranking: [],
  };

  return competitions[compId];
};

export const joinComp = function (username, compId) {
  if (compId in competitions) {
    const { participants, status } = competitions[compId];

    if (
      !participants.find((participant) => participant === username) &&
      status === "Open"
    )
      participants.push(username);
    else return null;

    return participants;
  }

  return null;
};

export const closeComp = function (compId, tournamentScores) {
  if (!(compId in competitions)) return false;

  const competition = competitions[compId];

  if (competition.status === "Closed") return false;

  competition.status = "Closed";
  competition.scores = tournamentScores;
  competition.ranking = [...competition.participants];
  competition.ranking.sort(
    (participantA, participantB) =>
      competition.scores[participantB] - competition.scores[participantA]
  );

  return true;
};
