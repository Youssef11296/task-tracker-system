// modules
import jwt from 'jsonwebtoken';
// models
import User from '../models/userModel.js';

const isAuth = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith ('Bearer')
    ) {
      token = req.headers.authorization.split (' ')[1];

      const decoded = jwt.verify (token, process.env.JWT_SECRET);

      req.user = await User.findOne ({_id: decoded.userId});
    }

    if (!token) {
      res.status (401);
      res.send ('Not authorized, no token.');
      return;
    }

    next ();
  } catch (error) {
    res.status (401).json ({success: false, message: 'Not authorized.'});
  }
};

export {isAuth};
