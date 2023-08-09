import competitionsDb from "../data/index.js";
import makeAddCompetition from "./addCompetition.js";
import makelistCompetition from "./listCompetition.js";
import makelistCompetitions from "./listCompetitions.js";

const listCompetitions = await makelistCompetitions({ competitionsDb });
const listCompetition = await makelistCompetition({ competitionsDb });
const addCompetition = await makeAddCompetition({ competitionsDb });
//other cases to be added
const competitionService = Object.freeze({
  listCompetitions,
  listCompetition,
  addCompetition,
});

export default competitionService;
export { listCompetitions, listCompetition, addCompetition };
