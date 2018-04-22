import Koa from 'koa';
import bodyparser from "koa-bodyparser";

const app = new Koa();
app.use(bodyparser());

export default app