// models
import User from '../../models/userModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* Get All Users
const getAllUsers = asyncHandler (async (req, res) => {
  try {
    const users = await User.find ({});
    res.status (200).json ({success: true, data: users});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* Delete User
const deleteUser = asyncHandler (async (req, res) => {
  try {
    const {userId} = req.params;
    // getting the user
    const user = await User.findOne ({_id: userId});
    if (!user) throw new Error ('User does not exist.');
    // deleting the user
    await user.delete ();
    // response
    res.status (201).json ({success: true, message: 'Successfully deleted!'});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* Exports
export {getAllUsers, deleteUser};
