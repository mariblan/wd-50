import { Router } from 'express';
import * as authControllers from '../controllers/authControllers.js';
import { tokenVerification } from '../middlewares/tokenVerification.js';

const authRouter = Router();

authRouter.post('/register', authControllers.register);
authRouter.post('/login', authControllers.login);
authRouter.post('/authentificated', tokenVerification, authControllers.getUser);

export default authRouter;
