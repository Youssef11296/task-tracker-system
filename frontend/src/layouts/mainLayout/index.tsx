import MainHeader from "./Header";
import MainFooter from "./MainFooter";
import { useDispatch, useSelector } from "react-redux";
import { toggleCustomModal } from "../../context/actions/uiActions";
import { RootState } from "../../context";

const MainLayout = (props: any) => {
  const { openCustomModalState } = useSelector((state: RootState) => state.ui)
  // dispatcher
  const dispatch = useDispatch()

  const closeAllCustomModals = (e: any) => {
    e.stopPropagation()
    openCustomModalState && dispatch(toggleCustomModal(false))
  }

  return (
    <div className="main-layout" onClick={closeAllCustomModals}>
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
