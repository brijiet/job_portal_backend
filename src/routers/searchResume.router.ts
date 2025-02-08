
import { Router } from 'express';
import passport from '../config/passport';
import { getSaveResumeController, getSingleSaveResumeController, saveSearchResumeController, searchResumeController } from '../controllers/searchResume.controller';

const searchResumeRouter = Router();

searchResumeRouter.post('/saveResume', saveSearchResumeController);
searchResumeRouter.post('/searchResumeResult', searchResumeController);
searchResumeRouter.get('/getSaveResumeResult', getSaveResumeController);
searchResumeRouter.get('/getSingleSaveResumeResult/:reqId', getSingleSaveResumeController);

export default searchResumeRouter;