import { BrowserRouter, Link } from "react-router-dom";
import MainHeader from "./Header";
import MainFooter from "./MainFooter";

const MainLayout = (props: any) => {
  return (
    <div className="main-layout">
      <MainHeader />
      <main>{props.children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;
