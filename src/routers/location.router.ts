import { Router } from 'express';
import { getLocation, getAllCityJobsCount } from '../controllers/location.controller';

const locationRouter = Router();

locationRouter.get('/get', getLocation);
locationRouter.get('/getAllCityJobsCount', getAllCityJobsCount);

export default locationRouter;