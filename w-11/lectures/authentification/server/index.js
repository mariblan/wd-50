import express from 'express';
import cors from 'cors';
import './DB/dbConnection.js';
import authRouter from './routes/authRoutes.js';
import { errorHandler } from './middlewares/ErrorHandler.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 8040;

app.use(express.json());
app.use(cors({ origin: ['http://localhost:5173'], optionsSuccessStatus: 200 }));

app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
