const { Router } = require('express');
const countriesRouter = Router();
const {
  getAllCountries,
  getOneCountryByCode,
  getCountryById,
} = require('../controllers/countryControllers.js');

countriesRouter.route('/').get(getAllCountries);
countriesRouter.route('/:id').get(getCountryById);
countriesRouter.route('/:code').get(getOneCountryByCode);

module.exports = countriesRouter;
