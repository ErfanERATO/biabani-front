import React from "react";
import "./style.scss";
import CustomHeader from "../Components/Header";
import CustomFooter from "../Components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <CustomHeader />
      <div className="main-content">{children}</div>
      <CustomFooter />
    </div>
  );
};

export default MainLayout;
