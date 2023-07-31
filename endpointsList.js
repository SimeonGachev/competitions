const projectSpecificFunctions = require("./projectSpecificFunctions");
const itemList = require("./itemList.js");
const vanillaMethods = require("./vanillaMethods.js");

const allEndpoints = [
  new vanillaMethods.Get("/shirts", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Get("/jeans", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Get("/jackets", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Get("/tracksuits", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Get("/shirts/*", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Get("/tracksuits/*", (req, res) =>
    projectSpecificFunctions.getter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Post("/shirts/*", (req, res) =>
    projectSpecificFunctions.poster(req, res, itemList.allItems)
  ),
  new vanillaMethods.Put("/shirts/*", (req, res) =>
    projectSpecificFunctions.putter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Delete("/shirts", (req, res) =>
    projectSpecificFunctions.deleter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Delete("/jeans", (req, res) =>
    projectSpecificFunctions.deleter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Delete("/jackets", (req, res) =>
    projectSpecificFunctions.deleter(req, res, itemList.allItems)
  ),
  new vanillaMethods.Delete("/tracksuits", (req, res) =>
    projectSpecificFunctions.deleter(req, res, itemList.allItems)
  ),
];
module.exports = { allEndpoints };
