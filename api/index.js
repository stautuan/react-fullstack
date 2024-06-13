// import express from "express";
// const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));

// app.listen(3000, () => console.log("Server ready on port 3000."));

// export default app;

import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({ "/api/*": "/$1" }));

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});

export default server;
