import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  }),
);
server.use(router);

const port = process.env.PORT || 3004;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

export default server;
