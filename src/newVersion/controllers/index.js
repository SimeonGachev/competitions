import buildGetAllCompetitions from "./listCompetitions.js";
import { listCompetitions } from "../use-cases/index.js";

const getAllCompetitions = buildGetAllCompetitions({ listCompetitions });
//

const competitionController = Object.freeze({
  getAllCompetitions,
});

export default competitionController;
export { getAllCompetitions };
