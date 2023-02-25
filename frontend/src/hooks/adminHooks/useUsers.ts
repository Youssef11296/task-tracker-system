import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import { useAuth } from "../useAuth";
import { getAllUsers } from "../../context/actions/adminActions/usersActions";

const useUsers = () => {
  const { usersList } = useSelector((state: RootState) => state.users);

  const { authToken } = useAuth();

  const dispatch: AppDispatch = useDispatch();

  const getAllUsersHandler = () => dispatch(getAllUsers(authToken));

  return {
    usersList,
    getAllUsersHandler,
  };
};

export default useUsers;
