// models
import User from '../models/userModel.js';

const isValidUser = async (req, res, next) => {
  try {
    const {username, email, password} = req.body;
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

    next ();
  } catch (error) {
    res.status (400).send (error.message);
  }
};

export {isValidUser};
