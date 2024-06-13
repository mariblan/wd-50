import { Router } from 'express';
import * as userControllers from '../controllers/users.js';
import upload from '../services/upload.js';

const usersRouter = Router();

usersRouter
  .route('/')
  .get(userControllers.getAllUsers)
  .post(upload.single('image'), userControllers.addNewUser);
usersRouter.route('/:id').delete(userControllers.deleteUser);

export default usersRouter;
