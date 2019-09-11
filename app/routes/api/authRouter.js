
const Router = require('koa-router');
const router = new Router();

/* Load controller */
const AuthController = require('../../controller/authController');
const authController = new AuthController();


router.post('/login', authController.common.bodyParser(), async (ctx) => {
    await authController.login(ctx);
});

module.exports = router;