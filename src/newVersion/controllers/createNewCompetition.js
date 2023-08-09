export default async function buildCreateCompetition({ addCompetition }) {
  return async function createCompetition(req, res) {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const reqBodyData = JSON.parse(data);

      addCompetition(reqBodyData)
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
