import { createServer } from "http";
import { router } from "./utils/routing.js";
import { createAllRoutes } from "./routes/Routes.js";

const PORT = 5000;

createAllRoutes();

const server = createServer(router.handleRequest);

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`I am alive on port: ${PORT}`);
});
