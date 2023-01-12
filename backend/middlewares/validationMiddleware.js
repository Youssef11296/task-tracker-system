// models
import User from '../models/userModel.js';

const isValidUser = async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
    if (!username || username === '' || username.length < 2) {
      res.status (400).json ({
        success: false,
        message: 'Username required and must contain 2 letters at least.',
      });
    }
    if (!email) {
      res.status (400).json ({success: false, message: 'Email is required.'});
    }
    if (!password) {
      res.satus (400).json ({success: false, message: 'Password is required.'});
    }

    const isExistedUser =
      (await User.findOne ({username})) || (await User.findOne ({email}));
    if (isExistedUser) {
      res.status (400).json ({
        success: false,
        message: 'User with same name or email is already exist. Try login.',
      });
    }

    next ();
  } catch (error) {
    res.status (400).send (error.message);
  }
};

export {isValidUser};
