import buildGetAllCompetitions from "./listCompetitions.js";
import buildGetCompetitionById from "./listCompetitionById.js";
import {
  listCompetitions,
  addCompetition,
  listCompetition,
  closeCompetition,
  joinCompetition,
} from "../use-cases/index.js";
import buildCreateCompetition from "./createNewCompetition.js";
import buildEndCompetition from "./endCompetition.js";
import buildEnterCompetition from "./enterCompetition.js";

const getAllCompetitions = buildGetAllCompetitions({ listCompetitions });
const getCompetitionById = buildGetCompetitionById({ listCompetition });
const createCompetition = buildCreateCompetition({ addCompetition });
const enterCompetition = buildEnterCompetition({ joinCompetition });
const endCompetition = buildEndCompetition({ closeCompetition });

const competitionController = Object.freeze({
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  endCompetition,
  enterCompetition,
});

export default competitionController;
export {
  getAllCompetitions,
  getCompetitionById,
  createCompetition,
  endCompetition,
  enterCompetition,
};
