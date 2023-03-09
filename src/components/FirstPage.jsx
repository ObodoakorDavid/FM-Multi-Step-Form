/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const FirstPage = () => {
  const { state, setState } = useContext(FormContext);

  return (
    <div className="first-page pt-4 d-flex flex-column gap-4">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Name
          </label>
          {state.errorMessage.name && (
            <small className="text-red fw-semibold">
              {state.errorMessage.name}
            </small>
          )}
        </div>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            setState({
              ...state,
              userDetails: { ...state.userDetails, name: e.target.value },
              errorMessage: { ...state.errorMessage, name: "" },
            });
          }}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Email Address
          </label>
          {state.errorMessage.email && (
            <small className="text-red fw-semibold">
              {state.errorMessage.email}
            </small>
          )}{" "}
        </div>

        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="email"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            setState({
              ...state,
              userDetails: { ...state.userDetails, email: e.target.value },
              errorMessage: { ...state.errorMessage, email: "" },
            });
          }}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <label className=" fw-semibold" htmlFor="name">
            Phone Number
          </label>
          {state.errorMessage.number && (
            <small className="text-red fw-semibold">
              {state.errorMessage.number}
            </small>
          )}
        </div>
        <input
          className=" w-100 p-2 ps-3 rounded border-gray"
          type="text"
          placeholder="e.g.Stephen King"
          onChange={(e) => {
            setState({
              ...state,
              userDetails: { ...state.userDetails, number: e.target.value },
              errorMessage: { ...state.errorMessage, number: "" },
            });
          }}
        />
      </div>
    </div>
  );
};

export default FirstPage;
