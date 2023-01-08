// modules
import bcrypt from 'bcryptjs';
// models
import User from '../models/userModel.js';

const isAuth = async (req, res) => {
  try {
    if (
      !req.headers.authentication ||
      !req.headers.authentication.startsWith ('Bearer')
    ) {
      res.status (401);
      throw new Error ('No Bearer token');
    }
  } catch (error) {}
};
