import { Router } from 'express';
import { getLocality } from '../controllers/locality.controller';

const localityRouter = Router();

localityRouter.get('/get/:locationList', getLocality);

export default localityRouter;