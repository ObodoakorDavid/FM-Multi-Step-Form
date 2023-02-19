/** @format */

import React, { useContext } from "react";
import CurrentPage from "./CurrentPage";
import FormContext from "../context/FormContext";

const Form = () => {
  const { pageIndex, pageDetails } = useContext(FormContext);
  return (
    <form className="form">
      <h1>{pageDetails[pageIndex].title}</h1>
      <CurrentPage />
      <div className="back-next">
        <p>Go Back</p>
        <button>Next Step</button>
      </div>
    </form>
  );
};

export default Form;
