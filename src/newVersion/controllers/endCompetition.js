export default async function buildEndCompetition({ closeCompetition }) {
  return async function endCompetition(req, res) {
    const competitionId = req.params.id;

    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const reqBodyData = JSON.parse(data);

      closeCompetition(competitionId, reqBodyData)
        .then((competition) => {
          res.writeHead(200, { "Content-type": "application/json" });
          res.end(JSON.stringify(competition));
        })
        .catch((err) => {
          res.writeHead(400, { "Content-type": "text/plain" });
          res.end("Error message: " + err.message);
        });
    });
  };
}
