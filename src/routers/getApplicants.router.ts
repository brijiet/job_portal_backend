import { Router } from 'express';
import { getApplicants } from '../controllers/user.controller';

const getApplicant = Router();
getApplicant.get('/', getApplicants )
export default getApplicant;



