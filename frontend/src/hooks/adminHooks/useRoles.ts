import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { useAuth } from "../useAuth";
import {
  createRole,
  deleteRole,
  editRole,
  getAllRoles,
  selectRole,
} from "../../context/actions/adminActions/rolesActions";
import { useState } from "react";

const useUsers = () => {
  const { rolesList } = useSelector((state: RootState) => state.roles);

  const { authToken } = useAuth();

  const dispatch: AppDispatch = useDispatch();

  const getAllRolesHandler = () => dispatch(getAllRoles(authToken));

  const createRoleHandler = (role: Role) => {
    dispatch(createRole(authToken, role));
    getAllRolesHandler();
  };

  const editRoleHandler = async (roleId: Role["_id"], role: Role) => {
    await dispatch(editRole(authToken, roleId, role));
    await getAllRolesHandler();
  };

  const deleteRoleHandler = (roleId: Role["_id"]) => {
    dispatch(deleteRole(authToken, roleId));
    getAllRolesHandler();
  };

  const selectRoleHandler = (role: Role | null) =>
    dispatch(selectRole(role as Role));

  const [openCreateRoleForm, setOpenCreateRoleForm] = useState<boolean>(false);
  const openCreateRoleFormHandler = () => setOpenCreateRoleForm(true);

  const closeCreateRoleFormHandler = () => {
    selectRoleHandler(null);
    setOpenCreateRoleForm(false);
  };

  return {
    rolesList,
    getAllRolesHandler,
    createRoleHandler,
    editRoleHandler,
    deleteRoleHandler,
    selectRoleHandler,
    openCreateRoleForm,
    openCreateRoleFormHandler,
    closeCreateRoleFormHandler,
  };
};

export default useUsers;
