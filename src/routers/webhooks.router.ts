import { Router } from 'express';
import { processInboundEmails } from '../controllers/webhooks.controller';

const webhooksRouter = Router();
webhooksRouter.post('/email', processInboundEmails);

export default webhooksRouter;