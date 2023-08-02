import { jeans } from "./jeansModel.js";

export const readAllJeans = function () {
  return jeans;
};

export const readJeansById = function (jeansId) {
  if (!(jeansId in jeans)) return null;

  return jeans[jeansId];
};

export const addJeans = function (color, size) {
  const jeansId = Object.values(jeans).length + 1;

  jeans[jeansId] = { color: color, size: size };

  return jeans[jeansId];
};

export const updateJeansById = function (jeansId, color, size) {
  if (!(jeansId in jeans)) return null;

  jeans[jeansId] = { color: color, size: size };

  return jeans[jeansId];
};

export const removeJeansById = function (jeansId) {
  if (!(jeansId in jeans)) return null;

  const singePairJeans = jeans[jeansId];

  delete jeans[jeansId];

  return singePairJeans;
};
