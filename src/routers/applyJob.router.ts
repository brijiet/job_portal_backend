import { Router } from 'express';
import { postApplyJob, fetchCountApplicant, fetchApplicantList, fetchApplyJobList, checkJobApplyApplicant, postApplicantStatus } from '../controllers/applyJob.controller';
import passport from '../config/passport';

const applyJobsRouter = Router();
applyJobsRouter.post('/post', passport.authenticate('jwt', { session: false }), postApplyJob);
applyJobsRouter.get('/countApplicant/:jobId', fetchCountApplicant);
applyJobsRouter.get('/applicantList', fetchApplicantList);
applyJobsRouter.get('/checkJobApplicant/:userId/:jobId/', checkJobApplyApplicant);
applyJobsRouter.get('/applyJobList/:userId', fetchApplyJobList);
applyJobsRouter.post('/saveApplicantStatus', postApplicantStatus);

export default applyJobsRouter;