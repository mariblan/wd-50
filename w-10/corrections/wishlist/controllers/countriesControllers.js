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
  if (!country_name || !alpha2_code || !alpha3_code) {
    res.send('Field empty!');
  } else {
    pool.query(
      'SELECT * FROM countries WHERE country_name = $1 OR alpha2_code = $2 OR alpha3_code = $3',
      [country_name, alpha2_code, alpha3_code],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          if (result.rows.length === 0) {
            pool.query(
              'INSERT INTO countries(country_name, alpha2_code, alpha3_code) VALUES($1, $2, $3) RETURNING *',
              [country_name, alpha2_code, alpha3_code],
              (error, result) => {
                if (error) {
                  throw error;
                } else {
                  res.json(result.rows[0]);
                }
              }
            );
          } else {
            console.log('Country already exists!');
            res.send('Country already exists!');
          }
        }
      }
    );
  }
};

const updateOneCountry = (req, res) => {
  const { country_name, alpha2_code, alpha3_code } = req.body;
  const { code } = req.params;
  pool.query(
    'SELECT * FROM countries WHERE country_name = $1 OR alpha2_code = $2 OR alpha3_code = $3',
    [country_name, alpha2_code, alpha3_code],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        if (result.rows.length === 0) {
          res.status(404).send('Country  not found!');
        } else {
          pool.query(
            'UPDATE countries SET country_name = $1, alpha2_code = $2, alpha3_code = $3  WHERE alpha2_code = $4 OR alpha3_code = $5 RETURNING *',
            [country_name, alpha2_code, alpha3_code, code, code],
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.json(result.rows[0]);
              }
            }
          );
        }
      }
    }
  );
};
const deleteOneCountry = (req, res) => {
  const { code } = req.params;
  pool.query(
    'SELECT * FROM countries WHERE  alpha2_code = $1 OR alpha3_code = $2',
    [code, code],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        if (result.rows.length === 0) {
          res.status(404).send('Country not found!');
        } else {
          pool.query(
            'DELETE FROM countries WHERE alpha2_code = $1 OR alpha3_code = $2 RETURNING *',
            [code, code],
            (err, result) => {
              if (err) {
                throw err;
              } else {
                res.json(result.rows[0]);
              }
            }
          );
        }
      }
    }
  );
};
export {
  getAllCountries,
  createOneCountry,
  getOneCountry,
  updateOneCountry,
  deleteOneCountry,
};
