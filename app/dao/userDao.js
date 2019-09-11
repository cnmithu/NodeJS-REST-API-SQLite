
/* Load DAO Common functions */
const CommonDao = require('./commonDao');


class UserDao {

    constructor(){
        this.common = new CommonDao()

    }

    /**
     * Get user by email
     * @param email
     * @returns entity
     */

    findUserByEmail(email){

        return this.common.db.first(['id', 'passwordHash'])
            .from('users')
            .where({ email })

    }



}

module.exports = UserDao;