const Router = require("koa-router");
const upload_ori = require("../upload/ori_fileupload_s3");
const upload_mask = require("../upload/mask_fileupload_s3");
const multer = require("koa-multer");

module.exports = () => {
  const router = new Router();

  router.post("/api/upload_ori", upload_ori, (ctx) => {
    // FormData의 경우 req로 부터 데이터를 얻을수 없다.
    // upload 핸들러(multer)를 통해서 데이터를 읽을 수 있다
    body = ctx.req.file;
    console.log(body);
    // console.log(body.location);
    ctx.response.body = { body };
  });

  router.post("/api/upload_mask", upload_mask, (ctx) => {
    body = ctx.req.file;
    console.log(body);
    // console.log(body.location);
    ctx.response.body = { body };
  });
  
  



  return router;
};
