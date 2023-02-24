// models
import Role from '../models/roleModel.js';
import User from '../models/userModel.js';

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne ({_id: req.user._id});

    const userRole = await Role.findOne ({_id: user.roleId});

    if (userRole.roleName !== 'ADMIN')
      throw new Error (
        "Sorry, you're not allowed to proceed with this operation, you're not an admin."
      );

    next ();
  } catch (error) {
    res.status (403).json ({success: false, message: error.message});
  }
};

export {isAdmin};
