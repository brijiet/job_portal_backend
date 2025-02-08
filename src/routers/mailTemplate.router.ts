import { Router } from 'express';
import { fetchOneMailTemplate, postMailTemplate,deleteMailTemplate,getMailTemplateDetails,updateMailTemplate } from '../controllers/mailTemplate.controller';

const mailTemplateRouter = Router();
mailTemplateRouter.post('/post', postMailTemplate);
mailTemplateRouter.get('/get/:userId', fetchOneMailTemplate);
mailTemplateRouter.delete('/mailTemplateDelete', deleteMailTemplate);
mailTemplateRouter.get('/getMailTemplateDetails',getMailTemplateDetails);
mailTemplateRouter.put('/updateMailTemplate',updateMailTemplate);
export default mailTemplateRouter;