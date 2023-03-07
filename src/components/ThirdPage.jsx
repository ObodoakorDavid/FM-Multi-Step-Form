/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const ThirdPage = () => {
  const { thirdPageData, handleAddOns, monthly } = useContext(FormContext);

  return (
    <div className="third-page d-flex flex-column gap-4">
      {thirdPageData.map((datum) => {
        return (
          <div
            className={`d-flex gap-3 align-items-center border-gray rounded p-3 ${
              datum.active === true ? "active" : ""
            }`}
            key={datum.id}
          >
            <input
              onChange={(e) => {
                handleAddOns(e.target.checked, datum);
                console.log(e.target.checked);
                console.log(datum);
              }}
              type="checkbox"
              checked={datum.active}
            />
            <div className=" flex-grow-1">
              <h4 className="m-0 fw-bold fs-5">{datum.heading}</h4>
              <p className="m-0 fw-semibold">{datum.paragraph}</p>
            </div>
            <p className=" fw-semibold">
              {monthly ? datum.monthlyPrice : datum.yearlyPrice}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ThirdPage;
