/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const FirstPage = () => {
  const { userDetails, setUserDetails, errorMessage, setErrorMessage } =
    useContext(FormContext);

  return (
    <div className="first-page pt-4 d-flex flex-column gap-4">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Name
          </label>
          <small
            className={`text-red fw-semibold ${
              errorMessage.name === "" ? "d-block" : "d-none"
            }`}
          >
            {errorMessage.name}
          </small>
        </div>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
        />
      </div>
      <div>
        <label className=" fw-semibold" htmlFor="name">
          Email Address
        </label>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="email"
          placeholder="e.g.Stephen King"
        />
      </div>
      <div>
        <label className=" fw-semibold" htmlFor="name">
          Phone Number
        </label>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
        />
      </div>
    </div>
  );
};

export default FirstPage;
