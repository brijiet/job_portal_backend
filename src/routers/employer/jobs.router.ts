import { Router } from 'express';
import { fetchJobsList, postJobs, fetchJobDetails, fetchUserBasedJobsList } from '../../controllers/employer/jobs.controller';
import passport from '../../config/passport';

const jobsRouter = Router();
jobsRouter.get('/list', fetchJobsList);
jobsRouter.post('/post', passport.authenticate('jwt', { session: false }), postJobs);
jobsRouter.get('/get/:id', fetchJobDetails);
jobsRouter.get('/userJobList', passport.authenticate('jwt', { session: false }), fetchUserBasedJobsList);

export default jobsRouter;