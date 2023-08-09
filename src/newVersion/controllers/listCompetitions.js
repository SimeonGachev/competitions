export default async function buildGetAllCompetitions({ listCompetitions }) {
  return async function getAllCompetitions(req, res) {
    try {
      const competitions = await listCompetitions();

      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(competitions));
    } catch (err) {
      res.writeHead(400, { "Content-type": "text/plain" });
      res.end("Error message:", err.message);
    }
  };
}
