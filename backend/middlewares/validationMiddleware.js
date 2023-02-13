// models
import User from '../models/userModel.js';

const isValidUser = async (req, res, next) => {
  try {
    const {username, email, password, roleId, planId} = req.body;
    if (!username || username === '' || username.length < 2) {
      throw new Error (
        'Username required and must contain 2 letters at least.'
      );
    }
    if (!username.match (/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/))
      throw new Error ('Username can not contain spaces or special charcters.');
    if (
      !email ||
      !email.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ) {
      throw new Error ('Email is required and must be valid.');
    }
    if (!password) throw new Error ('Password is required.');
    if (!roleId) throw new Error ('Role is required.');
    if (!planId) throw new Error ('Plan is required.');

    const isExistedUser =
      (await User.findOne ({username})) || (await User.findOne ({email}));

    if (isExistedUser)
      throw new Error (
        'User with same name or email is already exist. Try login.'
      );

    next ();
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
};

export {isValidUser};
