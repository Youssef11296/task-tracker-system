import { Link } from "react-router-dom";
import React from "react";
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
