/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const ThirdPage = () => {
  const { thirdPageData, setThirdPageData } = useContext(FormContext);

  return (
    <div className="third-page d-flex flex-column gap-4">
      {thirdPageData.map((datum) => {
        return (
          <div className="d-flex gap-3 align-items-center border-blue rounded p-3">
            <input onClick={(e) => {}} type="checkbox" />
            <div className=" flex-grow-1">
              <h4 className="m-0 fw-bold">{datum.heading}</h4>
              <p className="m-0 fw-semibold">{datum.paragraph}</p>
            </div>
            <p>{datum.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ThirdPage;
