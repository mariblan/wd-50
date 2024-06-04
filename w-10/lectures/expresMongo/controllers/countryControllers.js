const countriesCollection = require('../models/countryModel.js');

const getAllCountries = async (req, res) => {
  try {
    const countries = await countriesCollection.find();
    return res.status(200).json(countries);
  } catch (err) {
    throw err;
  }
};

const getOneCountryByCode = async (req, res) => {
  try {
    const { code } = req.params;
    console.log(code);
    const countryAl2 = await countriesCollection.find({ alpha2Code: code });
    const countryAl3 = await countriesCollection.find({ alpha3Code: code });

    if (countryAl2.length > 0) {
      return res.status(200).json(countryAl2);
    } else if (countryAl3.length > 0) {
      return res.status(200).json(countryAl3);
    } else {
      return res.status(404).json('Country not found!');
    }
  } catch (err) {
    throw err;
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const countryById = await countriesCollection.findById(id);
    return res.status(200).json(countryById);
  } catch (err) {
    throw err;
  }
};

const creatingOneCountry = async (req, res) => {};
const updatingOneCountry = async (req, res) => {};
const deletingOneCountry = async (req, res) => {};

module.exports = {
  getAllCountries,
  getOneCountryByCode,
  getCountryById,
  creatingOneCountry,
  updatingOneCountry,
  deletingOneCountry,
};
