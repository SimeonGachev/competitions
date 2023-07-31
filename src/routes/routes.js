const projectSpecificFunctions = require("../projectSpecificFunctions");
import { Get } from "../vanillaMethods.js";
import { Post } from "../vanillaMethods.js";
import { Put } from "../vanillaMethods.js";
import { Delete } from "../vanillaMethods.js";

const shirts1Routes = {
  GET: new Get("/shirts/1", projectSpecificFunctions.defaultGet),
  POST: new Post("/shirts/1", projectSpecificFunctions.defaultPost),
  PUT: new Put("/shirts/1", projectSpecificFunctions.defaultPut),
  DELETE: new Delete("/shirts/1", projectSpecificFunctions.defaultDelete),
};
const shirtsRoutes = {
  GET: new Get("/shirts", projectSpecificFunctions.defaultGet),
  POST: new Post("/shirts", projectSpecificFunctions.defaultPost),
  PUT: new Put("/shirts", projectSpecificFunctions.defaultPut),
  DELETE: new Delete("/shirts", projectSpecificFunctions.defaultDelete),
  shirts1: shirts1Routes,
};

const routes = {
  shirtsRoutes: shirtsRoutes,
};
