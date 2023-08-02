// export const matchPath = function (reqUrl, path) {
//   const strLen = Math.max(reqUrl.length, path.length);
//   for (let i = 0; i < strLen; i++) {
//     if (path[i] === "*") return true;
//     if (reqUrl[i] !== path[i]) return false;
//   }
//   return true;
// };

export const matchPath = function (reqUrl, path) {
  reqUrl = reqUrl.split("/");
  path = path.split("/");
  if (reqUrl.length !== path.length) return false;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "*") return true;
    if (reqUrl[i] !== path[i]) return false;
  }
  return true;
};
