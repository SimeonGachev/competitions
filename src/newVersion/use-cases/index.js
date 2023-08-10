import loggedUser from "../../userAuthentication/loggedUser.js";
import competitionsDb from "../data/index.js";
import makeAddCompetition from "./addCompetition.js";
import makeCloseCompetition from "./closeCompetition.js";
import makeJoinCompetition from "./joinCompetition.js";
import makelistCompetition from "./listCompetition.js";
import makelistCompetitions from "./listCompetitions.js";

const listCompetitions = await makelistCompetitions({ competitionsDb });
const listCompetition = await makelistCompetition({ competitionsDb });
const addCompetition = await makeAddCompetition({ competitionsDb, loggedUser });
const closeCompetition = await makeCloseCompetition({ competitionsDb });
const joinCompetition = await makeJoinCompetition({
  competitionsDb,
  loggedUser,
});
//other cases to be added
const competitionService = Object.freeze({
  listCompetitions,
  listCompetition,
  addCompetition,
  closeCompetition,
  joinCompetition,
});

export default competitionService;
export {
  listCompetitions,
  listCompetition,
  addCompetition,
  closeCompetition,
  joinCompetition,
};
