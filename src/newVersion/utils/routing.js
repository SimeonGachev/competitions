const routes = {
  GET: {},
  POST: {},
  PUT: {},
  DELETE: {},
};

const middlewareList = [];

const get = (path, handler) => {
  routes["GET"][path] = handler;
};

const post = (path, handler) => {
  routes["POST"][path] = handler;
};

const put = (path, handler) => {
  routes["PUT"][path] = handler;
};

const del = (path, handler) => {
  routes["DELETE"][path] = handler;
};

const use = (middleware) => {
  middlewareList.push(middleware);
};

const handleRequest = function (req, res) {
  const { method, url } = req;

  if (!(method in routes)) {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Invalid Method");
    return;
  }

  const routesList = Object.keys(routes[method]);

  const matchedRoute = routesList.find((path) => matchRoute(path, url));

  if (!matchedRoute) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
    return;
  }

  req.params = getRequestParams(matchedRoute, url);

  for (let middleware of middlewareList) {
    middleware(req, res);
  }

  routes[method][matchedRoute].then((resultFunction) => {
    resultFunction(req, res);
  });
};

const matchRoute = function (path, url) {
  path = path.split("/");
  url = url.split("/");

  if (path.length !== url.length) return false;

  for (let i = 0; i < url.length; i++) {
    if (path[i][0] === ":") continue;
    if (path[i] !== url[i]) return false;
  }

  return true;
};

const getRequestParams = function (path, url) {
  path = path.split("/");
  url = url.split("/");
  const params = {};

  for (let i = 0; i < url.length; i++) {
    if (path[i][0] !== ":") continue;
    params[path[i].slice(1)] = url[i];
  }

  return params;
};

export const router = {
  get: get,
  post: post,
  put: put,
  delete: del,
  handleRequest: handleRequest,
  use: use,
};
