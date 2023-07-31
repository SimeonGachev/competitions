import {
  readAllJeans,
  readJeansById,
  addJeans,
  updateJeansById,
  removeJeansById,
} from "./jeansService.js";

export const getAllJeans = function (req, res) {
  const allPairsJeans = readAllJeans();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(allPairsJeans));
};

export const getJeansById = function (req, res) {
  const jeansId = Number(req.url.split("/")[2]);
  const singlePairJeans = readJeansById(jeansId);
  if (singlePairJeans) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(singlePairJeans));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Jeans not found");
  }
};

export const postJeans = function (req, res) {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const { color, size } = JSON.parse(data);
    const singlePairJeans = addJeans(color, size);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(singlePairJeans));
  });
};

export const putJeans = function (req, res) {
  const jeansId = Number(req.url.split("/")[2]);
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const { color, size } = JSON.parse(data);
    const singlePairJeans = updateJeansById(jeansId, color, size);
    if (singlePairJeans) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(singlePairJeans));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end("Jeans not found");
    }
  });
};

export const deleteJeansById = function (req, res) {
  const jeansId = Number(req.url.split("/")[2]);
  const singlePairJeans = removeJeansById(jeansId);
  if (singlePairJeans) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(singlePairJeans));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Jeans not found");
  }
};
