// modules
import jwt from 'jsonwebtoken';
// models
import User from '../models/userModel';

const isValidUser = async (username, email, password) => {
  try {
    if (!username || username === '' || username.length < 2)
      throw new Error (
        'Username required and must contain 2 letters at least.'
      );
    if (!email) throw new Error ('Email is required.');
    if (!password) throw new Error ('Password is required.');

    const isExistedUser =
      (await User.findOne ({username})) || (await User.findOne ({email}));
    if (isExistedUser)
      throw new Error ('User with same name or email is already exist.');
  } catch (error) {
    return error;
  }
};

const generateToken = userId => {
  return jwt.sign ({userId}, process.env.JWT_SECRET, {expiresIn: '30d'});
};

export {isValidUser, generateToken};
