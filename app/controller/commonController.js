
const bcrypt = require('../utilities/bcrypt');
const authenticated = require('../middleware/authenticated');
const bodyParser = require('koa-bodyparser');

class CommonController {

    constructor(){
        this.bcrypt = bcrypt
        this.authenticated = authenticated
        this.bodyParser = bodyParser
    }


}

module.exports = CommonController;