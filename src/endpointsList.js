const projectSpecificFunctions = require("./projectSpecificFunctions");
const itemList = require("./itemList.js");
const vanillaMethods = require("./vanillaMethods.js");

export const allEndpoints = [
  new vanillaMethods.Get("/shirts", projectSpecificFunctions.shirts),
  new vanillaMethods.Get("/jeans", (req, res) =>
    projectSpecificFunctions.defaultGet(req, res)
  ),
  new vanillaMethods.Get("/jackets", (req, res) =>
    projectSpecificFunctions.defaultGet(req, res)
  ),
  new vanillaMethods.Get("/tracksuits", (req, res) =>
    projectSpecificFunctions.defaultGet(req, res)
  ),
  new vanillaMethods.Get("/shirts/*", (req, res) =>
    projectSpecificFunctions.defaultGet(req, res)
  ),
  new vanillaMethods.Get("/tracksuits/*", (req, res) =>
    projectSpecificFunctions.defaultGet(req, res)
  ),
  new vanillaMethods.Post("/shirts/*", (req, res) =>
    projectSpecificFunctions.defaultPost(req, res)
  ),
  new vanillaMethods.Put("/shirts/*", (req, res) =>
    projectSpecificFunctions.defaultPut(req, res)
  ),
  new vanillaMethods.Delete("/shirts", (req, res) =>
    projectSpecificFunctions.defaultDelete(req, res)
  ),
  new vanillaMethods.Delete("/jeans", (req, res) =>
    projectSpecificFunctions.defaultDelete(req, res)
  ),
  new vanillaMethods.Delete("/jackets", (req, res) =>
    projectSpecificFunctions.defaultDelete(req, res)
  ),
  new vanillaMethods.Delete("/tracksuits", (req, res) =>
    projectSpecificFunctions.defaultDelete(req, res)
  ),
];
