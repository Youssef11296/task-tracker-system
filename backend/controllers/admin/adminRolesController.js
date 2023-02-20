// models
import Role from '../../models/roleModel.js';
import Role from '../../models/roleModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* CREATE ROLE
const createRole = asyncHandler (async (req, res) => {
  try {
    const {user, body: {roleName, roleDescription}} = req;
    // checking if the user is an admin
    const userRole = await Role.findOne ({_id: user.roleId});
    const isAdmin = userRole.roleName === 'ADMIN';
    if (!isAdmin)
      throw new Error (
        "Sorry, you're not as admin, you can not process with this operation."
      );
    // checking if the role already exists
    const isExistedRole = await Role.findOne ({roleName});
    if (isExistedRole)
      throw new Error (
        'Role with the same name already exist. Please, try with another role name.'
      );
    // creating new role
    const newRole = await PLan.create ({
      roleName,
      roleDescription,
    });
    // response
    res
      .status (201)
      .json ({success: true, message: 'Successfully created.', data: newRole});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* UPDATE ROLE
const updateRole = asyncHandler (async (req, res) => {
  try {
    const {roleId} = req.params;
    // getting the role
    const role = await Role.findOne ({_id: roleId});
    if (!role) throw new Error ('Role does not exist.');
    // updating the role
    const updatedRole = await role.update (req.body, {new: true});
    // response
    res.status (201).json ({
      success: true,
      message: 'Successfully updated.',
      data: updatedRole,
    });
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* DELETE ROLE
const deleteRole = asyncHandler (async (req, res) => {
  try {
    const {roleId} = req.params;
    // checking if the role exist
    const role = await Role.findOne ({_id: roleId});
    if (!role) throw new Error ('PLan not exists. It may be deleted');
    // deleteing the role
    await role.delete ();
    // response
    res.status (201).json ({success: true, message: 'Successfully deleted!'});
  } catch (error) {
    res.status (400).json ({success: false, messgage: error.message});
  }
});

//* EXPORTS
export {createRole, deleteRole, updateRole};
