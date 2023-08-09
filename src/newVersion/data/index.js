import Id from "../Id/index.js";
import { competitions } from "../database/competitions.js";
import { buildCompetitionsDb } from "./competitionsDb.js";

const makeDb = async function () {
  return competitions;
};

const competitionsDb = await buildCompetitionsDb({ makeDb, Id });

export default competitionsDb;
