import { Router } from 'express';
import { SaveJobList, checkJobToSaveController, deleteSaveJob, postSaveJob } from '../controllers/saveJob.controller';

const saveJobsRouter = Router();
saveJobsRouter.post('/post', postSaveJob);
saveJobsRouter.delete('/deleteJob/:jobs/:userId', deleteSaveJob);
saveJobsRouter.get('/checkJobToSave/:userId/:jobId/', checkJobToSaveController);
saveJobsRouter.get('/saveJobList/:userId', SaveJobList);

export default saveJobsRouter;