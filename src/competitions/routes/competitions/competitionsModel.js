import { users } from "../users/usersModel.js"; //imported only for testing purposes

export let competitions = {
  1: {
    organiser: users[1],
    name: "Tournament1",
    participants: [users[1], users[2]],
    status: "Closed",
    ranking: [users[2], users[1]],
  },
  2: {
    organiser: users[1],
    name: "Tournament2",
    participants: [users[1]],
    status: "Closed",
    ranking: [users[1]],
  },
  3: {
    organiser: users[1],
    name: "Tournament3",
    participants: [users[2]],
    status: "Closed",
    ranking: [users[2]],
  },
  4: {
    organiser: users[2],
    name: "Tournament4",
    participants: [],
    status: "Open",
    ranking: [],
  },
};
