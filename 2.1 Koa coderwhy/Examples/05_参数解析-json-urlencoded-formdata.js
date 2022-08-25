const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const multer = require('koa-multer'); // form data
const Router = require('koa-router');

const app = new Koa();

const upload = multer();

app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.request.body); //empty
  console.log(ctx.req.body); // here
  ctx.response.body = "Hello World";
});

app.listen(8000, () => {
  console.log("koa初体验服务器启动成功~");
});
