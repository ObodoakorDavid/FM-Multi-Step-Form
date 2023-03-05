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
          {errorMessage.name && (
            <small className="text-red fw-semibold">{errorMessage.name}</small>
          )}
        </div>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            setUserDetails({ ...userDetails, name: e.target.value });
            setErrorMessage({ ...errorMessage, name: "" });
          }}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Email Address
          </label>
          {errorMessage.email && (
            <small className="text-red fw-semibold">{errorMessage.email}</small>
          )}{" "}
        </div>

        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="email"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            setUserDetails({ ...userDetails, email: e.target.value });
            setErrorMessage({ ...errorMessage, email: "" });
          }}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Phone Number
          </label>
          {errorMessage.number && (
            <small className="text-red fw-semibold">
              {errorMessage.number}
            </small>
          )}
        </div>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            console.log("ran");
            console.log(userDetails.number);
            setUserDetails({ ...userDetails, number: e.target.value });
            setErrorMessage({ ...errorMessage, number: "" });
          }}
        />
      </div>
    </div>
  );
};

export default FirstPage;
