import Id from "../Id/index.js";
import { competitions } from "../database/competitions.js";
import { buildCompetitionsDb } from "./competitionsDb.js";

const makeDb = async function () {
  return competitions;
};

const competitionsDb = await buildCompetitionsDb({ makeDb, Id });

export default competitionsDb;

//testing purposes only. To be deleted
try {
  const newCompetition = await competitionsDb.insert({
    name: 123,
  });
  console.log("New competition:", newCompetition);
} catch (error) {
  console.error("Error inserting competition:", error);
}
competitions.push({ id: 5, name: 500 });
try {
  const newCompetition = await competitionsDb.update({
    id: 5,
    name: 125,
  });
  console.log("New competition:", newCompetition);
} catch (error) {
  console.error("Error inserting competition:", error);
}

console.log(competitions);
