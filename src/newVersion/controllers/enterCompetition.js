export default async function buildEnterCompetition({ joinCompetition }) {
  return async function enterCompetition(req, res) {
    const competitionId = req.params.id;

    joinCompetition(competitionId)
      .then((competition) => {
        res.writeHead(200, { "Content-type": "application/json" });
        res.end(JSON.stringify(competition));
      })
      .catch((err) => {
        res.writeHead(400, { "Content-type": "text/plain" });
        res.end("Error message: " + err.message);
      });
  };
}
