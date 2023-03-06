/** @format */

import React, { useState, useContext } from "react";
import FormContext from "../context/FormContext";

const SecondPage = () => {
  const { data, handleSelectPlan } = useContext(FormContext);

  const [pickPlan, setPickPlan] = useState(true);

  return (
    <div className="second-page">
      <div className="top-section d-flex flex-column gap-3 text-center">
        {data.map((datum) => {
          return (
            <div
              className={`d-flex gap-3 align-items-center p-3 p-md-2 text-start border-gray  ${
                datum.active === true ? " active" : ""
              }`}
              onClick={(e) => {
                handleSelectPlan(e, datum);
              }}
              key={datum.id}
            >
              <img src={datum.img} alt="" />
              <div>
                <small className="m-0 fw-bold">{datum.heading}</small>
                <p className="m-0 text-cool-gray fw-semibold">
                  {datum.paragraph}
                </p>
                <small
                  className={
                    datum.plan == "monthly"
                      ? "m-0 fw-semibold d-none"
                      : "d-none"
                  }
                >
                  2 months fee
                </small>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-section mt-4 mt-sm-3 rounded d-flex justify-content-center gap-3 gap-sm-4 p-3 align-items-center bg-magnolia">
        <p className="m-0 fw-bold">Monthly</p>

        {/* <div class="form-check form-switch d-flex justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div> */}
        <div
          className={`slider rounded-5 ${pickPlan ? "" : "active"}`}
          onClick={() => {
            setPickPlan(!pickPlan);
            console.log("jj");
            console.log(pickPlan);
          }}
        >
          {/* <input type="checkbox" /> */}
          <span></span>
        </div>
        <p className="m-0 fw-bold">Yearly</p>
      </div>
    </div>
  );
};

export default SecondPage;
