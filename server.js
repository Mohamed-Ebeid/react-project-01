const jsonServer= require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./Data/db.json");
const middleware = jsonServer.default();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);

server.listen(port);
