/** @format */

import React, { useState, useContext, useEffect } from "react";
import FormContext from "../context/FormContext";

const SecondPage = () => {
  const { state, handleSelectPlan, handleMonthly, monthly, setMonthly } =
    useContext(FormContext);

  return (
    <div className="second-page">
      <div className="top-section d-flex flex-column gap-3 text-center">
        {state.secondPage.map((datum) => {
          return (
            <div
              className={`d-flex gap-3 align-items-center p-3 p-md-2 text-start border-gray  ${
                datum.active === true ? " active" : ""
              }`}
              onClick={() => {
                handleSelectPlan(datum);
              }}
              key={datum.id}
            >
              <img src={datum.img} alt="" />
              <div>
                <small className="m-0 fw-bold">{datum.heading}</small>
                <p className="m-0 text-cool-gray fw-semibold">
                  {monthly
                    ? `$${datum.monthlyPrice}/mo`
                    : `$${datum.yearlyPrice}/mo`}
                </p>
                <small
                  className={`m-0 fw-semibold ${
                    monthly ? " visually-hidden" : "visible"
                  }`}
                >
                  2 months free
                </small>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-section mt-4 mt-sm-3 rounded d-flex justify-content-center gap-3 gap-sm-4 p-3 align-items-center bg-magnolia">
        <p className="m-0 fw-bold">Monthly</p>
        <div
          className={`slider rounded-5 ${monthly ? "" : "active"}`}
          onClick={() => {
            setMonthly((prev) => !prev);
            console.log(monthly);
            handleMonthly(monthly);
          }}
        >
          <span></span>
        </div>
        <p className="m-0 fw-bold">Yearly</p>
      </div>
    </div>
  );
};

export default SecondPage;
