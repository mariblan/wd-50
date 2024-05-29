const { pool } = require('../DB/dbConnection');

const getAllUsers = (req, res) => {
  // const query = 'SELECT * FROM users';
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

const getOneUser = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    if (results) {
      res.status(200).json(results.rows);
    }
  });
};

const createOneUser = (req, res) => {
  const { name, email } = req.body;
  pool.query(
    'SELECT * FROM users WHERE email = $1',
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows > 0) {
        res.send('User already exists!');
      } else {
        pool.query(
          'INSERT INTO users(name, email) VALUES($1, $2)',
          [name, email],
          (error, results) => {
            if (error) {
              throw error;
            }
            res.send(`User was created!`);
          }
        );
      }
    }
  );
};

const updateOneUser = (req, res) => {

};

const deleteOneUser = (req, res) => {};

module.exports = {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
};
