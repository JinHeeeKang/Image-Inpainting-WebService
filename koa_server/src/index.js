const koa = require("koa");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const logger = require("koa-logger");
const router = require("./router");

const run = async () => {
  const app = new koa();
  const _router = router(router);

  app.use(cors());
  app.use(logger());
  app.use(koaBody());
  app.use(_router.routes());//접근할수 있는 주소 setting

  const port = 7777;
  const server = await app.listen(port);//서버 오픈
  console.log(`server run ${port}`);

  return server;
};

run();
