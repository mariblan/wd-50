import { Router } from 'express';
import {
  getCats,
  postCat,
  oneCat,
  updateCat,
} from '../controllers/catsControllers.js';

const catsRouter = Router();

catsRouter.route('/').get(getCats).post(postCat);
catsRouter.route('/:id').get(oneCat).put(updateCat);

export default catsRouter;
