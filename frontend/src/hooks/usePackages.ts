import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import {
  choosePackage,
  getAllPackages,
} from "../context/actions/packagesActions";
import { useAuth } from "./useAuth";
import { getMe } from "../context/actions/authActions";

const usePackages = () => {
  const { packagesList } = useSelector((state: RootState) => state.packages);

  const dispatch: AppDispatch = useDispatch();

  const getAllPackagesHandler = () => dispatch(getAllPackages());

  const { authToken, getMeHandler } = useAuth();

  const choosePackageHandler = async (packageId: Package["_id"]) => {
    await dispatch(choosePackage(authToken, packageId));
    await getAllPackagesHandler();
    await dispatch(getMeHandler());
  };

  return {
    packagesList,
    getAllPackagesHandler,
    choosePackageHandler,
  };
};

export default usePackages;
