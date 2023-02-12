import MainHeader from "./Header";
import MainFooter from "./MainFooter";
import { useDispatch } from "react-redux";
import { toggleCustomModal } from "../../context/actions/uiActions";

const MainLayout = (props: any) => {
  // dispatcher
  const dispatch = useDispatch()

  const closeAllCustomModals = (e: any) => {
    e.stopPropagation()
    dispatch(toggleCustomModal(false))
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
