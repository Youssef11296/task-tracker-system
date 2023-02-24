// models
import Role from '../models/roleModel.js';

const isAdmin = async (req, res, next) => {
  try {
    const {user} = req;

    console.log ({user});
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
