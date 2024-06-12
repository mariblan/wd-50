import express from 'express';
import { getPgVersion } from './DB/fetchDB.js';
import countriesRouter from './routes/countriesRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.BACKEND_URL || 8080;

getPgVersion();

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello class');
});

app.use('/countries', countriesRouter);

app.listen(port, () => console.log(`Server is running in port ${port}`));
