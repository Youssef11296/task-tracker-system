// modules
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils/helpers.js';
// models
import User from '../models/userModel.js';
import Package from '../models/packageModel.js';
import Role from '../models/roleModel.js';

//* REGISTER USER
const registerUser = asyncHandler (async (req, res) => {
  try {
    const {username, email, password, roleId} = req.body;

    const basicPackage = await Package.findOne ({packageName: 'BASIC'});
    const packageId = basicPackage._id.toString ();

    const hashedPassword = await bcrypt.hash (password, 10);

    const userRole = await Role.findOne ({_id: roleId});

    const newUser = await User.create ({
      username,
      email,
      password: hashedPassword,
      roleId,
      packageId,
    });

    newUser.token = generateToken (newUser._id);

    await newUser.save ();

    res.status (201).json ({
      success: true,
      message: 'Successfully registered.',
      data: newUser,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* LOGIN USER
const loginUser = asyncHandler (async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password)
      throw new Error ('Both email and password are required.');

    const user = await User.findOne ({email});
    if (!user) throw new Error ('User does not exist.');

    if (!await bcrypt.compare (password, user.password))
      throw new Error ('Password is not correct.');

    const userRole = await Role.findOne ({_id: user.roleId});
    const userPackage = await Package.findOne ({_id: user.packageId});

    res.status (200).json ({
      success: true,
      message: 'Successfully logged in.',
      data: {
        _id: user._id,
        email,
        username: user.username,
        role: {
          roleId: user.roleId,
          roleName: userRole.roleName,
        },
        package: {
          packageId: user.packageId,
          packageName: userPackage.packageName,
        },
        // tasks: user.tasks,
        token: generateToken (user._id),
      },
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* GET ME
const getMe = asyncHandler (async (req, res) => {
  try {
    const {user} = req;
    const userData = await User.findOne ({email: user.email});

    const userRole = await Role.findOne ({_id: userData.roleId});
    const userPackage = await Package.findOne ({_id: userData.packageId});

    res.status (200).json ({
      success: true,
      data: {
        _id: user._id,
        username: userData.username,
        email: userData.email,
        role: {
          roleId: userData.roleId,
          roleName: userRole.roleName,
        },
        package: {
          packageId: userData.packageId,
          packageName: userPackage.packageName,
        },
        verified: userData.verified,
        verifications: userData.verifications,
        verificationRequestStatus: userData.verificationRequestStatus,
      },
    });
  } catch (error) {}
});

export {registerUser, loginUser, getMe};
