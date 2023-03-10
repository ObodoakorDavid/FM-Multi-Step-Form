/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const Progress = () => {
  const { pageIndex, state } = useContext(FormContext);
  return (
    <div className="progress-numbers d-flex justify-content-center gap-2 gap-md-3 ps-md-4 flex-md-column container-fluid">
      {state.progress.map((eachProgress) => {
        const { id, step, info } = eachProgress;
        return (
          <div key={id} className="d-md-flex align-items-md-baseline gap-3">
            <small className={pageIndex === id - 1 ? "active" : ""}>{id}</small>
            <div className="d-none d-md-block text-md-start">
              <p className="text-cool-gray m-0">{step}</p>
              <p className=" text-white fw-bold m-0">{info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Progress;
