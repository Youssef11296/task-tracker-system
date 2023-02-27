// modules
import express from 'express';
import cors from 'cors';
import upload from 'express-fileupload';
import {config} from 'dotenv';
// configs
import {connectDb} from './configs/dbConfig.js';
// routes
import authRoute from './routes/authRoute.js';
import tasksRoute from './routes/tasksRoute.js';
import teamsRoute from './routes/teamsRoute.js';
import plansRoute from './routes/packagesRoute.js';
import adminVerificationsRoute from './routes/admin/adminVerificationsRoute.js';
import adminPlansRoute from './routes/admin/adminPackagesRoute.js';
import adminRolesRoute from './routes/admin/adminRolesRoute.js';
import adminUsersRoute from './routes/admin/adminUsersRoute.js';

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

// public routes
app.use ('/api/v1/auth', authRoute);
app.use ('/api/v1/tasks', tasksRoute);
app.use ('/api/v1/teams', teamsRoute);
app.use ('/api/v1/packages', plansRoute);
// admin routes
app.use ('/api/v1/admin/packages', adminPlansRoute);
app.use ('/api/v1/admin/roles', adminRolesRoute);
app.use ('/api/v1/admin/users', adminUsersRoute);
app.use ('/api/v1/admin/verifications', adminVerificationsRoute);

// listening port
const port = process.env.PORT || 5000;

// app config
app.listen (port, () => console.log (`Server is ON: ${port}`));
