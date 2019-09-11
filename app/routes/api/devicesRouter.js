
const Router = require('koa-router');
const router = new Router({ prefix: '/devices' });

/* Load controller */
const DevicesController = require('../../controller/devicesController');
const devicesController = new DevicesController();



router.get('/', devicesController.common.authenticated, async (ctx) =>{

   await devicesController.findSiteDevicesBySiteUserId(ctx);

});

module.exports = router
