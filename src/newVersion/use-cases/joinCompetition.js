import makeCompetition from "../competition/index.js";

export default async function makeJoinCompetition({
  competitionsDb,
  loggedUser,
}) {
  return async function joinCompetition(id) {
    const existingCompetition = await competitionsDb.getById({ id });

    if (!existingCompetition) {
      throw new Error("Tournament not found");
    }

    const competition = await makeCompetition(existingCompetition);
    competition.addParticipant(loggedUser.username);

    return competitionsDb.insert({
      id: competition.getId(),
      participants: competition.getParticipants(),
    });
  };
}
