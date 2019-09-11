
/* Load DAO Common */
const CommonDao = require('./commonDao');

class DevicesDao {

    constructor(){
        this.common = new CommonDao()

    }

    /**
     * Get all devices of the site where current user belongs to
     * @param userId
     * @returns Entities
     */
    findSiteDevicesBySiteUserId(userId){

        return this.common.db.column({id:'devices.id'},this.common.db.raw("'device' as type"),'model','firmware',{site:'sites.name'}).select()
            .from('devices')
            .innerJoin('sites','sites.id','devices.sites_id')
            .innerJoin('sites_users','sites.id','sites_users.sites_id')
            .where({ users_id: userId });

    }



}

module.exports = DevicesDao;