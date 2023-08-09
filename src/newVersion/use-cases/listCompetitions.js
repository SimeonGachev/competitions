export default function makelistCompetitions({ competitionsDb }) {
  return async function listCompetitions() {
    const competitions = await competitionsDb.getAll();

    return competitions;
  };
}
