/** @format */

import React, { useContext } from "react";
import CurrentPage from "./CurrentPage";
import FormContext from "../context/FormContext";

const Form = () => {
  const { pageIndex, pageDetails, nextStep, goBack } = useContext(FormContext);
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <h1>{pageDetails[pageIndex].title}</h1>
      <CurrentPage />
      <div className="back-next">
        <p
          onClick={() => {
            goBack();
          }}
        >
          Go Back
        </p>
        <button>Next Step</button>
      </div>
    </form>
  );
};

export default Form;
