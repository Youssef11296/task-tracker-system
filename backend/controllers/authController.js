// modules
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
// models
import User from '../models/userModel.js';
import {generateToken} from '../utils/helpers.js';

// controller
const registerUser = asyncHandler (async (req, res) => {
  try {
    const {username, email, password} = req.body;

    const hashedPassword = await bcrypt.hash (password, 10);

    const newUser = await User.create ({
      username,
      email,
      password: hashedPassword,
    });

    newUser.token = generateToken (newUser._id);

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

    if (!email || !password)
      throw new Error ('Both email and password are required.');

    const user = await User.findOne ({email});
    if (!user) throw new Error ('User does not exist.');

    if (!await bcrypt.compare (password, user.password))
      throw new Error ('Password is not correct.');

    res.status (200).json ({
      success: true,
      message: 'Successfully logged in.',
      data: {
        _id: user._id,
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

const getMe = asyncHandler (async (req, res) => {
  try {
    const {user} = req;
    const userData = await User.findOne ({email: user.email});
    res.status (200).json ({
      success: true,
      data: {
        _id: user._id,
        username: userData.username,
        email: userData.email,
        verified: userData.verified,
        verifications: userData.verifications,
        verificationRequestStatus: userData.verificationRequestStatus,
      },
    });
  } catch (error) {}
});

export {registerUser, loginUser, getMe};
