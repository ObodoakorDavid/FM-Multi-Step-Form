/** @format */

import React, { useContext } from "react";
import CurrentPage from "./CurrentPage";
import FormContext from "../context/FormContext";

const Form = () => {
  const { pageIndex, pageDetails, nextStep, goBack } = useContext(FormContext);
  return (
    <form
      className={`form pt-4 ps-4 pe-4 pb-4 ${
        pageIndex === 4 ? "pt-5 text-center" : ""
      }`}
      onSubmit={(e) => {
        e.preventDefault();
        nextStep();
      }}
    >
      <div className={pageIndex === 4 ? "d-flex flex-column-reverse h-100 justify-content-center " : ""}>
        <div>
          <h1>{pageDetails[pageIndex].title}</h1>
          <p className="text-cool-gray fw-semibold">
            {pageDetails[pageIndex].detail}
          </p>
        </div>
        <CurrentPage />
      </div>
      <div
        className={`back-next bg-white justify-content-between align-items-baseline w-100 p-3 p-md-0 pt-md-5 ps-md-4 pe-md-4 ${
          pageIndex === 4 ? "d-none" : "d-flex"
        }`}
      >
        <p
          onClick={() => {
            goBack();
          }}
          className="m-0 text-cool-gray cursor-pointer back-btn"
          style={{
            visibility: pageIndex === 0 ? "hidden" : "visible",
          }}
        >
          Go Back
        </p>
        <button className="btn btn1">
          {pageIndex === 3
            ? "Confirm"
            : pageIndex === 4
            ? "Finish"
            : "Next Step"}
        </button>
      </div>
    </form>
  );
};

export default Form;
