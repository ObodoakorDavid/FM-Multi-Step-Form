/** @format */

import React, { useContext } from "react";
import CurrentPage from "./CurrentPage";
import FormContext from "../context/FormContext";

const Form = () => {
  const { pageIndex, pageDetails, nextStep, goBack } = useContext(FormContext);
  return (
    <form
      className="form pt-4 ps-4 pe-4 pb-4"
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <h1>{pageDetails[pageIndex].title}</h1>
      <p>{pageDetails[pageIndex].detail}</p>
      <CurrentPage />
      <div className="back-next d-flex justify-content-between align-items-baseline w-100 p-4 p-md-0 pt-md-5 ps-md-4 pe-md-4">
        <p
          onClick={() => {
            goBack();
          }}
          className=""
        >
          Go Back
        </p>
        <button className="btn">Next Step</button>
      </div>
    </form>
  );
};

export default Form;
