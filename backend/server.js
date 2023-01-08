import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {connectDb} from './configs/dbConfig';
import authRouter from './routes/authRoute';

// connecting db
connectDb ();

// app init
const app = express ();

// app middlewares
app.use (express.json ());
app.use (cors ());

// app routes
app.use ('/api/v1/auth', authRouter);

// listening port
const port = process.env.PORT || 5000;

// app config
app.listen (port, () => console.log (`Server is ON: ${port}`));
