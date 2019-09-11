
/*Load ENV module*/
require('dotenv').config();

const Koa = require('koa');

/*Load error handler and logger module*/
const errorHandler = require('./app/middleware/errorHandler');
const logger = require('koa-logger');

/*Load router modules*/
const authRouter = require('./app/routes/api/authRouter');
const devicesRouter = require('./app/routes/api/devicesRouter');


const app = new Koa();

/* Router configuration */
app.use(authRouter.routes())
    .use(authRouter.allowedMethods())
    .use(devicesRouter.routes())
    .use(devicesRouter.allowedMethods())
    .use(logger())
    .use(errorHandler);

module.exports = {
    app
}
