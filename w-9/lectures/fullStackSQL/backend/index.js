const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const { getPgVersion, pool } = require('./DB/dbConnection');
const {
  getAllUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} = require('./controllers/userControlles');

const PORT = process.env.BACK_END || 8000;

getPgVersion();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.route('/users').get(getAllUsers).post(createOneUser);
app
  .route('/users/:id')
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

app.listen(PORT, () => console.log(`Server running in ${PORT}`));
