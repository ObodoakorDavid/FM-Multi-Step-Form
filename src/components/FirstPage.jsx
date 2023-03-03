/** @format */

import React from "react";

const FirstPage = () => {
  return (
    <div className="first-page pt-4 d-flex flex-column gap-4">
      <div>
        <label className=" fw-semibold" htmlFor="name">
          Name
        </label>
        <input
          className=" w-100 p-2 ps-3 rounded"
          type="text"
          placeholder="e.g.Stephen King"
        />
      </div>
      <div>
        <label className=" fw-semibold" htmlFor="name">
          Email Address
        </label>
        <input
          className=" w-100 p-2 ps-3 rounded"
          type="email"
          placeholder="e.g.Stephen King"
        />
      </div>
      <div>
        <label className=" fw-semibold" htmlFor="name">
          Phone Number
        </label>
        <input
          className=" w-100 p-2 ps-3 rounded"
          type="text"
          placeholder="e.g.Stephen King"
        />
      </div>
    </div>
  );
};

export default FirstPage;
