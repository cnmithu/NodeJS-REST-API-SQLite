
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secret';
const tokenExpire = parseInt(process.env.JWT_LOGIN_EXPIRATION_TIME || 1800);
const wrongUserPassMsg = 'Incorrect username and/or password.';


/* Load User Data Access Object */
const UserDao = require('../dao/userDao');

/* Load Controller Common function */
const ControllerCommon = require('./commonController');


class AuthController {

    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    }

    /**
     * Check user authentication
     * @param ctx
     * @returns {email,token}
     */
   async login(ctx){

       const { email, password } = ctx.request.body;

       if (!email) ctx.throw(422, 'Email required.');
       if (!password) ctx.throw(422, 'Password required.');

       /*Get user by Email*/
       const dbUser = await this.userDao.findUserByEmail(email);

       if (!dbUser) ctx.throw(401, wrongUserPassMsg);

       /*Check given password with the user password have in the system using bcrypt if user is exist in the DB*/
       if (await this.common.bcrypt.compare(password, dbUser.passwordHash)) {

           const payload = { userId: dbUser.id,
                             email:email };

           try {
               const token = jwt.sign(payload, secret,{ expiresIn: tokenExpire});

               ctx.body = {email,token};

           } catch (err) {
               ctx.throw(err.status || 403, err.text);
           }

       } else {
           ctx.throw(401, wrongUserPassMsg);
       }


   }

}

module.exports = AuthController