import { users } from "../users/usersModel.js"; //imported only for testing purposes

export let competitions = {
  1: {
    organiser: "johnWick",
    name: "Tournament1",
    participants: ["johnWick", "bighot"],
    status: "Closed",
    scores: { bighot: 100, johnWick: 5 },
    ranking: ["bighot", "johnWick"],
  },
  2: {
    organiser: "johnWick",
    name: "Tournament2",
    participants: ["johnWick"],
    status: "Closed",
    scores: { johnWick: 5 },
    ranking: ["johnWick"],
  },
  3: {
    organiser: "johnWick",
    name: "Tournament3",
    participants: ["bighot"],
    status: "Closed",
    scores: { bighot: 100 },
    ranking: ["bighot"],
  },
  4: {
    organiser: "bighot",
    name: "Tournament4",
    participants: ["bighot", "johnWick"],
    status: "Open",
    scores: {},
    ranking: [],
  },
};
