import {
  readAllShirts,
  readShirtById,
  addShirt,
  updateShirtById,
  removeShirtById,
} from "./shirtsService.js";

export const getAllShirts = function (req, res) {
  const shirts = readAllShirts();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(shirts));
};

export const getShirtById = function (req, res) {
  const shirtId = Number(req.url.split("/")[2]);
  const shirt = readShirtById(shirtId);

  if (shirt) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(shirt));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Shirt not found");
  }
};

export const postShirt = function (req, res) {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const { color } = JSON.parse(data);
    const shirt = addShirt(color);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(shirt));
  });
};

export const putShirt = function (req, res) {
  const shirtId = Number(req.url.split("/")[2]);
  let data = "";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    const { color } = JSON.parse(data);
    const shirt = updateShirtById(shirtId, color);

    if (shirt) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(shirt));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end("Shirt not found");
    }
  });
};

export const deleteShirtById = function (req, res) {
  const shirtId = Number(req.url.split("/")[2]);
  const shirt = removeShirtById(shirtId);

  if (shirt) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(shirt));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("Shirt not found");
  }
};
