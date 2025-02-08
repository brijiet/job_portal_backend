import { Router } from 'express';
import { fetchOneComposeMail, postComposeMail } from '../controllers/composeMail.controller';
import passport from '../config/passport'

const composeMailRouter = Router();
composeMailRouter.post('/post', passport.authenticate('jwt', {session:false}), postComposeMail);
composeMailRouter.get('/get/:userId', fetchOneComposeMail);

export default composeMailRouter;