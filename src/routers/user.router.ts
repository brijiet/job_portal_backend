import { Router } from 'express';
import { changeUserPassword, getUserDetails, updateEmailAddressController, updateMobileNumberController } from '../controllers/user.controller';
import passport from 'passport';

const userRouter = Router();

userRouter.get('/getDetails', passport.authenticate('jwt'), getUserDetails);
userRouter.post('/updateEmailAddress', passport.authenticate('jwt'), updateEmailAddressController);
userRouter.post('/updateMobileNumber', passport.authenticate('jwt'), updateMobileNumberController);
userRouter.post('/updatePassword', passport.authenticate('jwt'), changeUserPassword);


export default userRouter;