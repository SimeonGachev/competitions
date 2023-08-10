import makeCompetition from "../competition/index.js";

export default async function makeAddCompetition({
  competitionsDb,
  loggedUser,
}) {
  return async function addCompetition(competitionInfo) {
    if (!loggedUser.username) {
      throw new Error("Please Log in to create a Tournament");
    }

    const competition = await makeCompetition({
      ...competitionInfo,
      organiser: loggedUser.username,
    });

    return competitionsDb.insert({
      id: competition.getId(),
      organiser: competition.getOrganiser(),
      name: competition.getName(),
      createdOn: competition.getCreatedOn(),
      modifiedOn: competition.getModifiedOn(),
      participants: competition.getParticipants(),
      open: competition.isOpen(),
      scores: competition.getScores(),
      ranking: competition.getRanking(),
    });
  };
}
