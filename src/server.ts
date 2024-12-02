import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { corsConfig } from './config/cors';
import { connect } from './config/db';
import taskRoutes from './routes/taskRoutes';

dotenv.config();

connect();

const app = express();
app.use(cors(corsConfig));
app.use(express.json());

app.use('/api/tasks', taskRoutes);


export default app;