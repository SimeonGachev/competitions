import {
  getAll,
  getById,
  createComp,
  joinComp,
  closeComp,
} from "./competitionsService.js";
import { loggedUser } from "../login/loginModel.js";

export const getAllCompetitions = function (req, res) {
  const competitions = getAll();

  res.writeHead(200, { "Content-type": "application/json" });
  res.end(JSON.stringify(competitions));
};

export const getCompetition = function (req, res) {
  const compId = req.url.split("/")[2];
  const competition = getById(compId);

  if (competition) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(competition));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end("Route not found");
  }
};

export const createCompetition = function (req, res) {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const jsonBody = JSON.parse(body);

    if (!("name" in jsonBody)) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Invalid competition name");
    } else {
      const compName = jsonBody.name;

      if (loggedUser.username) {
        const competition = createComp(loggedUser.username, compName);

        res.writeHead(201, { "Content-type": "application/json" });
        res.end(
          `New competition ${JSON.stringify(competition)} created successfully`
        );
      } else {
        res.writeHead(401, { "Content-type": "text/plain" });
        res.end("Please log in");
      }
    }
  });
};

export const joinCompetition = function (req, res) {
  if (loggedUser.username) {
    const compId = req.url.split("/")[2];
    const participants = joinComp(loggedUser.username, compId);

    if (participants) {
      res.writeHead(201, { "Content-type": "application/json" });
      res.end(
        `Joined successfully. Participats list: ${JSON.stringify(participants)}`
      );
    } else {
      res.writeHead(404, { "Content-type": "text/plai" });
      res.end("Cannot join this competition");
    }
  } else {
    res.writeHead(401, { "Content-type": "text/plain" });
    res.end("Please log in");
  }
};

export const closeCompetition = function (req, res) {
  const compId = req.url.split("/")[2];

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const scores = JSON.parse(body);
    const isCompetitionOpen = closeComp(compId, scores);

    if (isCompetitionOpen) {
      res.writeHead(201, { "Content-type": "application/json" });
      res.end(`Tournament is over`);
    } else {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Tournament is already closed");
    }
  });
};
