import { Router } from 'express';
import {
  getAllCountries,
  getOneCountry,
  createOneCountry,
  updateOneCountry,
  deleteOneCountry,
} from '../controllers/countriesControllers.js';
const countriesRouter = Router();

countriesRouter.route('/').get(getAllCountries).post(createOneCountry);
countriesRouter
  .route('/:code')
  .get(getOneCountry)
  .put(updateOneCountry)
  .delete(deleteOneCountry);

export default countriesRouter;
