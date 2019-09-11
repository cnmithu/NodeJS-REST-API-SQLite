
/* Load DB instance */
const db = require('../db');

class CommonDao {

    constructor(){
        this.db = db
    }


}

module.exports = CommonDao;