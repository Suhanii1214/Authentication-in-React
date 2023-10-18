import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controllers from '../controllers/appControllers.js'

/**POST Methods */
router.route('/register').post(controllers.register) //register user
// router.route('/registerMail').post() //send the email
router.route('/authenticate').post((req, res) => res.end()) //authenticate user
router.route('/login').post(controllers.login) //login in app

/**GET Methods */
router.route('/user/:username').get(controllers.getUser) //user with username
router.route('/generateOTP').get(controllers.generateOTP) //generate random OTP
router.route('/verifyOTP').get(controllers.verifyOTP) //verify generated OTP
router.route('/createResetSession').get(controllers.createResetSession) //reset all the variables

/**PUT Methods */
router.route('/updateuser').put(controllers.updateUser) //is used to update the user profile
router.route('/resetPassword').put(controllers.resetPassword); //used to reset password

export default router;