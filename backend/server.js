import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {connectDb} from './configs/dbConfig.js';
import authRoute from './routes/authRoute.js';
import tasksRoute from './routes/tasksRoute.js';

// using dotenv config
config ();

// connecting db
connectDb ();

// app init
const app = express ();

// app middlewares
app.use (express.json ());
app.use (cors ());

// app routes
app.use ('/api/v1/auth', authRoute);
app.use ('/api/v1/tasks', tasksRoute);

// listening port
const port = process.env.PORT || 5000;

// app config
app.listen (port, () => console.log (`Server is ON: ${port}`));
