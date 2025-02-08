import { Router } from 'express';
import { applyDateForMessagingController, communicationMessageController, jobSeekerToRecruiterCommunicationController, updateIsReadStatusController } from '../controllers/communicationsMaster.controller';
import passport from 'passport';

const communicationsMasterRouter = Router();

communicationsMasterRouter.get('/get/:userId/:userType', passport.authenticate('jwt', { session: false }), jobSeekerToRecruiterCommunicationController);
communicationsMasterRouter.post('/post', passport.authenticate('jwt', { session: false }), communicationMessageController);
communicationsMasterRouter.get('/applyJobs/:jobSeekerProfileId/:jobId', passport.authenticate('jwt', { session: false }), applyDateForMessagingController);
communicationsMasterRouter.get('/read/:communicationsId/:receiverId', passport.authenticate('jwt', { session: false }), updateIsReadStatusController);

export default communicationsMasterRouter;