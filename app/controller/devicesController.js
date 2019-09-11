
/* Load Devices Data Access Object */
const DevicesDao = require('../dao/devicesDao');

/* Load Controller Common */
const ControllerCommon = require('./commonController');

class DevicesController {

    constructor() {
        this.devicesDao = new DevicesDao();
        this.common = new ControllerCommon();
    }

    /**
     * Get all devices of the site where current user belongs to
     * @param ctx
     * @returns {Promise<void>}
     */
    async findSiteDevicesBySiteUserId(ctx){

        const userId = ctx.request.jwtPayload.userId;
        const devices = await this.devicesDao.findSiteDevicesBySiteUserId(userId);
        ctx.body = devices;
    }



}

module.exports = DevicesController
