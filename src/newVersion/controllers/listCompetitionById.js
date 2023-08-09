export default async function buildGetCompetitionById({ listCompetition }) {
  return async function getCompetitionById(req, res) {
    try {
      const competitionId = req.params.id;
      const competition = await listCompetition(competitionId);

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(competition));
    } catch (err) {
      res.writeHead(400, { "Content-type": "text/plain" });
      res.end("Error message:", err.message);
    }
  };
}
