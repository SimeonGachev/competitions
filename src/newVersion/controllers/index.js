import buildGetAllCompetitions from "./listCompetitions.js";
import buildGetCompetitionById from "./listCompetitionById.js";
import {
  listCompetitions,
  addCompetition,
  listCompetition,
} from "../use-cases/index.js";
import buildCreateCompetition from "./createNewCompetition.js";

const getAllCompetitions = buildGetAllCompetitions({ listCompetitions });
const getCompetitionById = buildGetCompetitionById({ listCompetition });
const createCompetition = buildCreateCompetition({ addCompetition });
const joinCompetition = buildGetAllCompetitions({ listCompetitions });
const closeCompetition = buildGetAllCompetitions({ listCompetitions });
//
const competitionController = Object.freeze({
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
});

export default competitionController;
export { getAllCompetitions, getCompetitionById, createCompetition };
