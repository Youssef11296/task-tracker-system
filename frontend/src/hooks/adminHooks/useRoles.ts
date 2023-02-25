import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { useAuth } from "../useAuth";
import { getAllRoles } from "../../context/actions/adminActions/usersActions";

const useUsers = () => {
  const { rolesList } = useSelector((state: RootState) => state.roles);

  const { authToken } = useAuth();

  const dispatch: AppDispatch = useDispatch();

  const getAllRolesHandler = () => dispatch(getAllRoles(authToken));

  return {
    rolesList,
    getAllRolesHandler,
  };
};

export default useUsers;
