import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context";
import {
  createPackage,
  deletePackage,
  selectPackage,
} from "../../context/actions/adminActions/adminPackagesActions";
import { useAuth } from "../useAuth";
import usePackages from "../usePackages";

const useAdminPackages = () => {
  const { authToken } = useAuth();
  const { getAllPackagesHandler } = usePackages();

  const dispatch: AppDispatch = useDispatch();

  const createPackageHandler = (newPackageData: Package) => {
    dispatch(createPackage(authToken, newPackageData));
    getAllPackagesHandler();
  };

  const selectPackageHandler = (packageData: Package | null) => {
    dispatch(selectPackage(packageData));
  };

  const deletePackageHandler = (packageId: Package["_id"]) => {
    dispatch(deletePackage(authToken, packageId));
    getAllPackagesHandler();
  };

  return {
    createPackageHandler,
    selectPackageHandler,
    deletePackageHandler,
  };
};

export default useAdminPackages;
