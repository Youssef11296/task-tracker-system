// models
import User from '../../models/userModel.js';

//* Get All Users
const getAllUsers = async (req, res) => {
  try {
    const {user} = req;
    const users = await User.find ({});
    res.status (200).json ({success: true, data: users});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

//* Exports
export {getAllUsers};
