import express from 'express';
import { getMethod, postMethod } from './controllers/generalControllers.js';
import { getCats, postCat } from './controllers/catsControllers.js';
import getOnlyMiddleware from './middlewares/getOnlyMiddleware.js';
import catsRouter from './routes/catsRoutes.js';
import dogsRouter from './routes/dogsRoutes.js';
import errorHandler from './middlewares/errorHandling.js';

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use('/cats', getOnlyMiddleware);

app
  .route('/')
  .get(getOnlyMiddleware, getMethod)
  .post(getOnlyMiddleware, postMethod);

app.use('/cats', catsRouter);
// app.route('/cats').get(getCats).post(postCat);
app.use('/dogs', dogsRouter);

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running in http://localhost:${port}`)
);
