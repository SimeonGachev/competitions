export default async function makelistCompetition({ competitionsDb }) {
  return async function listCompetition(id) {
    const competition = await competitionsDb.getById({ id: id });

    return competition;
  };
}
