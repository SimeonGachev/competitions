import competitionsDb from "../data/index.js";
import makelistCompetitions from "./listCompetitions.js";

const listCompetitions = await makelistCompetitions({ competitionsDb });
//other cases to be added

const competitionService = Object.freeze({
  listCompetitions,
});

export default competitionService;
export { listCompetitions };
