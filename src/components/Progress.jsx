/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Progress = () => {
  const { pageIndex } = useContext(FormContext);
  return (
    <div className="progress">
      <small className="active">1</small>
      <small className={pageIndex >= 2 ? "active" : ""}>2</small>
      <small className={pageIndex >= 3 ? "active" : ""}>3</small>
      <small className={pageIndex >= 4 ? "active" : ""}>4</small>
    </div>
  );
};

export default Progress;
