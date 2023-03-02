/** @format */

import React, { useState, useContext } from "react";
import FormContext from "../context/FormContext";

const SecondPage = () => {
  const { data, handleSelectPlan } = useContext(FormContext);

  return (
    <div className="second-page">
      <div className="top-section d-flex flex-column gap-3 text-center">
        {data.map((datum) => {
          return (
            <div
              className={
                datum.active === true
                  ? " active d-flex gap-3 align-items-center p-3 text-start"
                  : "d-flex gap-3 align-items-center p-3 text-start"
              }
              onClick={(e) => {
                handleSelectPlan(e, datum);
              }}
              key={datum.id}
            >
              <img src={datum.img} alt="" />
              <div>
                <small className="m-0 fw-bold">{datum.heading}</small>
                <p className="m-0">{datum.paragraph}</p>
                <small
                  className={
                    datum.plan == "monthly" ? "m-0 fw-semibold" : "d-none"
                  }
                >
                  2 months fee
                </small>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-section mt-4 rounded d-flex justify-content-between p-3 align-items-center">
        <p className="m-0">Monthly</p>
        <div className="">toggle</div>
        <p className="m-0">Yearly</p>
      </div>
    </div>
  );
};

export default SecondPage;
