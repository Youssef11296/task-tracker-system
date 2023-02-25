// models
import Role from '../../models/roleModel.js';
// modules
import asyncHandler from 'express-async-handler';

//* GET ALL ROLES
const getAllRoles = asyncHandler (async (req, res) => {
  try {
    const roles = await Role.find ({});
    res.status (200).json ({success: true, data: roles});
  } catch (error) {
    res.status (400).json ({success: false, message: error.message});
  }
});

//* CREATE ROLE
const createRole = asyncHandler (async (req, res) => {
  try {
    const {roleName, roleDescription} = req.body;
    // basic validation
    if (!roleName || !roleDescription) {
      throw new Error ('Both role name and role description are required.');
    }
    // checking if the role already exists
    const isExistedRole = await Role.findOne ({roleName});
    if (isExistedRole)
      throw new Error (
        'Role with the same name already exist. Please, try with another role name.'
      );
    // creating new role
    const newRole = await Role.create ({
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
    await Role.findByIdAndDelete (roleId);
    // response
    res.status (201).json ({success: true, message: 'Successfully deleted!'});
  } catch (error) {
    res.status (404).json ({success: false, messgage: 'Role does not exist.'});
  }
});

//* EXPORTS
export {getAllRoles, createRole, deleteRole, updateRole};
