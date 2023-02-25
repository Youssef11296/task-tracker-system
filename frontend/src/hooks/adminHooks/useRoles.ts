import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { useAuth } from "../useAuth";
import {
  deleteRole,
  editRole,
  getAllRoles,
  selectRole,
} from "../../context/actions/adminActions/rolesActions";

const useUsers = () => {
  const { rolesList } = useSelector((state: RootState) => state.roles);

  const { authToken } = useAuth();

  const dispatch: AppDispatch = useDispatch();

  const getAllRolesHandler = () => dispatch(getAllRoles(authToken));

  const editRoleHandler = (roleId: Role["_id"], role: Role) =>
    dispatch(editRole(authToken, roleId, role));

  const deleteRoleHandler = (roleId: Role["_id"]) => {
    dispatch(deleteRole(authToken, roleId));
    getAllRolesHandler();
  };

  const selectRoleHandler = (role: Role | null) =>
    dispatch(selectRole(role as Role));

  return {
    rolesList,
    getAllRolesHandler,
    editRoleHandler,
    deleteRoleHandler,
    selectRoleHandler,
  };
};

export default useUsers;
