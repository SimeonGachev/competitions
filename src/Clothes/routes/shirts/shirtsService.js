import { shirts } from "./shirtsModel.js";

export const readAllShirts = function () {
  return shirts;
};

export const readShirtById = function (shirtId) {
  if (!(shirtId in shirts)) return null;

  return shirts[shirtId];
};

export const addShirt = function (color) {
  const shirtId = Object.values(shirts).length + 1;

  shirts[shirtId] = { color: color };

  return shirts[shirtId];
};

export const updateShirtById = function (shirtId, color) {
  if (!(shirtId in shirts)) return null;

  shirts[shirtId] = { color: color };

  return shirts[shirtId];
};

export const removeShirtById = function (shirtId) {
  if (!(shirtId in shirts)) return null;

  const shirt = shirts[shirtId];

  delete shirts[shirtId];

  return shirt;
};
