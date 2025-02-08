import { Router } from 'express';
import passport from 'passport';
import { blockApplicantController, deleteBlockCompaniesController, emailNotificationController, getBlockCompaniesController, getEmailNotificationController, saveBlockCompaniesController, updateEmailAndMobileNotificationController } from '../controllers/settings.controller';

const settingsRouter = Router();

settingsRouter.get('/get/:userId', passport.authenticate('jwt', { session: false }), getBlockCompaniesController);
settingsRouter.get('/delete/:companyId', passport.authenticate('jwt', { session: false }), deleteBlockCompaniesController);
settingsRouter.get('/applicant/:companyId', passport.authenticate('jwt', { session: false }), blockApplicantController);
settingsRouter.post('/post', passport.authenticate('jwt', { session: false }), saveBlockCompaniesController);

settingsRouter.post('/postEmailNotification', passport.authenticate('jwt', { session: false }), emailNotificationController);
settingsRouter.get('/getEmailNotification/:userId', passport.authenticate('jwt', { session: false }), getEmailNotificationController);

settingsRouter.post('/updateEmailAndMobileNotification', passport.authenticate('jwt', { session: false }), updateEmailAndMobileNotificationController);

export default settingsRouter;
