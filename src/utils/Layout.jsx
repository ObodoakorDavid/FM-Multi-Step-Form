/** @format */

import React from "react";
import Progress from "../components/Progress";
import "../styles/All.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="top-half">
        <Progress />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
