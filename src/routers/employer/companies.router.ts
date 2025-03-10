import { Router } from 'express';
import { fetchAllCompanies, fetchCompanyDetails, postCompanies, fetchEmployerCompanyList, topCompanies, deleteCompanyProfile, updateCompanyProfile } from '../../controllers/employer/companies.controller';

const companiesRouter = Router();

//jobsRouter.get('/all', passport.authenticate('jwt'), getJobsDetails);

companiesRouter.get('/all/:offset?', fetchAllCompanies);
companiesRouter.get('/topCompanies', topCompanies);
companiesRouter.post('/post', postCompanies);
companiesRouter.get('/get/:id', fetchCompanyDetails);
companiesRouter.get('/employerCompanyList', fetchEmployerCompanyList);
companiesRouter.put('/profileupdate/:id', updateCompanyProfile);
companiesRouter.put('/delete', deleteCompanyProfile);

export default companiesRouter;