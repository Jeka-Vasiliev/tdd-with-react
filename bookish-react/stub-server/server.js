const serverFactory = require("json-server");
const path = require("node:path");

const server = serverFactory.create();
const router = serverFactory.router(path.join(__dirname, "db.json"));
const middlewares = serverFactory.defaults();

server.use(async (req, res, next) => {
  if (req.method === "DELETE" && req.query["_cleanup"]) {
    console.log(`DELETE`);

    const db = router.db;
    db.set("books", []).write();
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log("JSON server is running");
});
