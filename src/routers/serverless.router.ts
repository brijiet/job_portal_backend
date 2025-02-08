import { Router } from 'express';
import {
} from '../services/serverless/emailVerifySweep.service';
import { fetchJobsForJobSeekerForServerless, generateTokenForServerless, getEmailStagingById, getJobsForJobSeeker, saveCommunicationsFromServerless, serverLessAllApplicantList, storeEmailSent, sweepEmailTemplates, sweepJobSeekerForJobAlerts, updateEmailStagingForServerless, updateUserForServerless } from '../controllers/serverless/serverless.controller';

const serverLessRouter = Router();

serverLessRouter.get('/emailStaging/:cursor', sweepEmailTemplates);
serverLessRouter.post('/emailStagingForQueue', getEmailStagingById);
serverLessRouter.post('/generateToken', generateTokenForServerless);
serverLessRouter.put('/updateUser', updateUserForServerless);
serverLessRouter.get('/jobSeeker/:notificationDuration/:cursor', sweepJobSeekerForJobAlerts);
serverLessRouter.post('/jobs', getJobsForJobSeeker);
serverLessRouter.post('/emailSent', storeEmailSent);
serverLessRouter.put('/emailStaging', updateEmailStagingForServerless);
serverLessRouter.post('/emailStaging/jobSeeker', fetchJobsForJobSeekerForServerless);
serverLessRouter.get('/jobApplicantsList/:token/:jobId', serverLessAllApplicantList);
serverLessRouter.post('/saveCommunications/:token', saveCommunicationsFromServerless);

export default serverLessRouter;