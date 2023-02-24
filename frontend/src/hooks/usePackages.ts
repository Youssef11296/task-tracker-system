import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../context";
import { useEffect } from "react";
import { getAllPackages } from "../context/actions/packagesActions";

const usePackages = () => {
  const { packagesList } = useSelector((state: RootState) => state.packages);

  const dispatch: AppDispatch = useDispatch();

  const getAllPackagesHandler = () => dispatch(getAllPackages());

  return {
    packagesList,
    getAllPackagesHandler,
  };
};

export default usePackages;
