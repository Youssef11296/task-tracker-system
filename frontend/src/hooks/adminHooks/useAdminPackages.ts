import { useDispatch } from "react-redux";
import { AppDispatch } from "../../context";
import {
  createPackage,
  deletePackage,
  editPackage,
  selectPackage,
} from "../../context/actions/adminActions/adminPackagesActions";
import { useAuth } from "../useAuth";
import usePackages from "../usePackages";
import { useState } from "react";
import useUsers from "./useUsers";

const useAdminPackages = () => {
  const { authToken } = useAuth();
  const { getAllPackagesHandler } = usePackages();

  const [openCreatePackage, setOpenCreatePackage] = useState<boolean>(false);
  const openCreatePackageHandler = () => setOpenCreatePackage(true);

  const closeCreatePackageHandler = () => {
    dispatch(selectPackage(null));
    setOpenCreatePackage(false);
  };

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

  const editPackageHandler = (
    packageId: Package["_id"],
    newPackageData: Package
  ) => {
    dispatch(editPackage(authToken, packageId, newPackageData));
    getAllPackagesHandler();
  };

  const { usersList } = useUsers();

  const getPackageNumOfUsers = (packageId: Package["_id"]) => {
    console.log({ usersList });
    return usersList?.filter(
      (user: User) => user?.package?.packageId === packageId
    ).length;
  };

  return {
    createPackageHandler,
    selectPackageHandler,
    deletePackageHandler,
    openCreatePackage,
    closeCreatePackageHandler,
    openCreatePackageHandler,
    getPackageNumOfUsers,
    editPackageHandler,
  };
};

export default useAdminPackages;
