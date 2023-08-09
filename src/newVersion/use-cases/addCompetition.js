import makeCompetition from "../competition/index.js";

export default async function makeAddCompetition({ competitionsDb }) {
  return async function addCompetition(competitionInfo) {
    const competition = await makeCompetition(competitionInfo);

    return competitionsDb.insert({
      id: competition.getId(),
      organiser: competition.getOrganiser(),
      name: competition.getName(),
      createdOn: competition.getCreatedOn(),
      modifiedOn: competition.getModifiedOn(),
      participants: competition.getPartitipants(),
      open: competition.isOpen(),
      scores: competition.getScores(),
      ranking: competition.getRanking(),
    });
  };
}
