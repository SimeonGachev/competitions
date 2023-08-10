export async function buildCompetitionsDb({ makeDb, Id }) {
  return Object.freeze({
    getAll,
    getById,
    insert,
    update,
  });

  async function getAll() {
    const db = await makeDb();

    return db;
  }

  async function getById({ id }) {
    const db = await makeDb();

    const target = db.find((obj) => obj.id === id);

    if (!target) {
      return null;
    }

    return target;
  }

  async function insert(competitionInfo) {
    const db = await makeDb();

    db.push(competitionInfo);

    return competitionInfo;
  }

  async function update(competitionInfo) {
    const db = await makeDb();
    const { id } = competitionInfo;
    const indexOfCompetitionToBeUpdated = db.findIndex((obj) => obj.id === id);

    db[indexOfCompetitionToBeUpdated] = {
      ...db[indexOfCompetitionToBeUpdated],
      ...competitionInfo,
    };

    return db[indexOfCompetitionToBeUpdated];
  }
}
