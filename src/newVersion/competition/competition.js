export default function buildMakeCompetition({ Id }) {
  return async function makeCompetition({
    id = Id.newId(),
    organiser,
    name,
    createdOn = Date.now(),
    modifiedOn = Date.now(),
    participants = [],
    open = true,
    scores = {},
    ranking = [],
  }) {
    if (!Id.isValidId(id)) {
      throw new Error("invalid Id");
    }

    if (!organiser) {
      throw new Error("competition needs an organiser");
    }

    if (!name) {
      throw new Error("competition needs a name");
    }

    if (!modifiedOn) {
      modifiedOn = Date.now();
    }

    return Object.freeze({
      getId: () => id,
      getOrganiser: () => organiser,
      getName: () => name,
      getCreatedOn: () => createdOn,
      getModifiedOn: () => modifiedOn,
      getParticipants: () => participants,
      getScores: () => scores,
      getRanking: () => ranking,
      isOpen: () => open,
      close: () => {
        open = false;
      },
      setScores: (newScores) => {
        scores = newScores;
      },
      updateRanking: () => {
        ranking = [...participants];
        ranking.sort(
          (participantA, participantB) =>
            competition.scores[participantB] - competition.scores[participantA]
        );
      },
      addParticipant: (participant) => participants.push(participant),
    });
  };
}
