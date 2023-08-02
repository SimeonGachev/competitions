import { users } from "../../usersModel.js";

export const getAll = function (userId) {
  return users[userId]["stats"];
};

export const updateWins = function (userId, competition) {
  const { username } = users[userId];

  if (competition.ranking[0] === username) users[userId]["stats"]["wins"]++;
};

export const updateBestScore = function (userId, competition) {
  const { username } = users[userId];

  users[userId]["stats"]["bestScore"] = Math.max(
    users[userId]["stats"]["bestScore"],
    competition.scores[username]
  );
};

export const updateArchive = function (userId, competition) {
  users[userId]["stats"]["archive"].unshift(competition);
};
