import express from 'express';
import { getPgVersion, pool } from './DB/fetchDB.js';
import countriesRouter from './routes/countriesRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.BACKEND_URL || 8080;

getPgVersion();
app.get('/', (req, res) => {
  console.log(process.env.PGHOST);
  res.send(`${process.env.PGHOST}`);
});

app.use('/countries', countriesRouter);

app.listen(port, () => console.log(`Server is running in port ${port}`));
