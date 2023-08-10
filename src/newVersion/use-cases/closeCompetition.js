import makeCompetition from "../competition/index.js";

export default async function makeCloseCompetition({ competitionsDb }) {
  return async function closeCompetition(id, scores) {
    const existingCompetition = await competitionsDb.getById({ id });

    if (!existingCompetition) {
      throw new Error("Tournament not found");
    }

    if (!scores) {
      throw new Error("Scores must be provided");
    }

    const competition = await makeCompetition({
      ...existingCompetition,
      modifiedOn: null,
    });
    competition.setScores(scores);
    competition.updateRanking();
    competition.close();

    return competitionsDb.insert({
      id: competition.getId(),
      modifiedOn: competition.getModifiedOn(),
      open: competition.isOpen(),
      scores: competition.getScores(),
      ranking: competition.getRanking(),
    });
  };
}
