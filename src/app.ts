import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { testRouter } from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/test', testRouter);

export default app;
