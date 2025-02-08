import { Router } from 'express';
import { getEmailDuration } from '../controllers/emailDuration.controller';

const emailDurationRouter = Router();

emailDurationRouter.get('/get', getEmailDuration);

export default emailDurationRouter;