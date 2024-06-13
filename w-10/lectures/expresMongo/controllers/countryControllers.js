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

const creatingOneCountry = async (req, res) => {
  try {
    const { name, alpha2Code, alpha3Code, capital } = req.body;
    if (!name || !alpha2Code || !alpha3Code || !capital)
      res.status(401).send('Field empty');
    const foundCountry = await countriesCollection.findOne({ name });
    if (!foundCountry) {
      const newCountry = await countriesCollection.create(req.body);
      // return res.status(200).send("Country was created")
      return res.status(200).json(newCountry);
    } else {
      return res.status(401).send('Country already in the database');
    }
  } catch (err) {
    throw err;
  }
};
const updatingOneCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, alpha2Code, alpha3Code, capital } = req.body;
    if (!name || !alpha2Code || !alpha3Code || !capital)
      res.status(401).send('There are empty fields!');
    const foundCountry = await countriesCollection.findById(id);
    if (!foundCountry) res.status(404).send('Country not found');
    const updateCountry = await countriesCollection.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateCountry);
  } catch (err) {
    throw err;
  }
};
const deletingOneCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const foundCountry = await countriesCollection.findById(id);
    if (!foundCountry) res.status(404).send('Country not found!');
    const deleteCountry = await countriesCollection.findByIdAndDelete(id);
    res.status(200).json(deleteCountry);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllCountries,
  getOneCountryByCode,
  getCountryById,
  creatingOneCountry,
  updatingOneCountry,
  deletingOneCountry,
};
