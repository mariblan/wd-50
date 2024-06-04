const { Schema, model } = require('mongoose');

const countrySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      default: '',
    },
    alpha2Code: {
      type: String,
      required: true,
      unique: true,
      default: '',
    },
    alpha3Code: {
      type: String,
      required: true,
      unique: true,
      default: '',
    },
    capital: {
      type: String,
      required: true,
      unique: true,
      default: '',
    },
  },
  { collection: 'countries' }
);

module.exports = model('country', countrySchema);
