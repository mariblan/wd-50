import { pool } from '../DB/fetchDB.js';

const getAllCountries = (req, res) => {
  pool.query('SELECT * FROM countries', (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
};

const getOneCountry = (req, res) => {
  const { code } = req.params;
  pool.query(
    'SELECT * FROM countries WHERE alpha2_code = $1 OR alpha3_code = $1',
    [code],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result.rows[0]);
      }
    }
  );
};

const createOneCountry = (req, res) => {
  const { country_name, alpha2_code, alpha3_code } = req.body;
  if (!country_name || !alpha2_code || !alpha3_code) res.send('Field empty!');
  pool.query(
    'INSERT INTO countries(country_name, alpha2_code, alpha3_code) VALUES($1, $2, $3)',
    [country_name, alpha2_code, alpha3_code],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.json(result.rows[0]);
      }
    }
  );
};

const updateOneCountry = (req, res) => {
  pool.query('SELECT * FROM countries', (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
};
const deleteOneCountry = (req, res) => {
  pool.query('SELECT * FROM countries', (error, result) => {
    if (error) {
      throw error;
    } else {
      res.json(result.rows);
    }
  });
};
export {
  getAllCountries,
  createOneCountry,
  getOneCountry,
  updateOneCountry,
  deleteOneCountry,
};
