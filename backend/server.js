import express from 'express';
import cors from 'cors';
import upload from 'express-fileupload';
import {config} from 'dotenv';
import {connectDb} from './configs/dbConfig.js';
import authRoute from './routes/authRoute.js';
import tasksRoute from './routes/tasksRoute.js';
import uploadRoute from './routes/uploadRoute.js';

// using dotenv config
config ();

// connecting db
connectDb ();

// app init
const app = express ();

// app middlewares
app.use (express.json ());
app.use (cors ());
app.use (upload ());

// app routes
app.use ('/api/v1/auth', authRoute);
app.use ('/api/v1/tasks', tasksRoute);
app.use ('/api/v1/upload', uploadRoute);

// listening port
const port = process.env.PORT || 5000;

// app config
app.listen (port, () => console.log (`Server is ON: ${port}`));
