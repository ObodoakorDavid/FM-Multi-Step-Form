/** @format */

import React from "react";
import Progress from "../components/Progress";
import "../styles/All.css";

const Layout = ({ children }) => {
  return (
    <div
      className="layout pt-md-5 bg-magnolia pb-md-0"
    >
      <div className="inner-layout rounded d-md-flex gap-md-3 gap-lg-5 p-md-4">
        <div className="top-half">
          <Progress />
        </div>
        <main className="w-100">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
