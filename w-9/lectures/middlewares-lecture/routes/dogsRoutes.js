import { Router } from 'express';
import {
  getCats,
  postCat,
  oneCat,
  updateCat,
} from '../controllers/catsControllers.js';

const dogsRouter = Router();

dogsRouter.route('/').get(getCats).post(postCat);
dogsRouter.route('/:id').get(oneCat).put(updateCat);

export default dogsRouter;
