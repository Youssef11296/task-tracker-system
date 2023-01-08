// modules
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
// models
import User from '../models/userModel';
import {generateToken, isValidUser} from '../utils/helpers';

// controller
const registerUser = asyncHandler (async (req, res) => {
  try {
    const {username, email, password} = req.body;
    await isValidUser (username, email, password);

    const hashedPassword = await bcrypt.hash (password, 10);

    const newUser = await User.create ({
      username,
      email,
      password: hashedPassword,
    });

    res.status (201).json ({
      success: true,
      message: 'Successfully registered.',
      data: newUser,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

const loginUser = asyncHandler (async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email) throw new Error ('Email is required.');

    const user = await User.findOne ({email});
    if (!user) throw new Error ('User does not exist.');

    if (!await bcrypt.compare (password, user.password))
      throw new Error ('Password is not correct.');

    res.status (200).json ({
      success: true,
      data: {
        email,
        username: user.username,
        tasks: user.tasks,
        token: generateToken (user._id),
      },
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

export {registerUser, loginUser};
