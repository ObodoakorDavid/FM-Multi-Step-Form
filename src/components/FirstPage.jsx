/** @format */

import React from "react";

const FirstPage = () => {
  return (
    <div className="first-page pt-2">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="e.g.Stephen King" />
      </div>
      <div>
        <label htmlFor="name">Email Address</label>
        <input type="email" placeholder="e.g.Stephen King" />
      </div>
      <div>
        <label htmlFor="name">Phone Number</label>
        <input type="text" placeholder="e.g.Stephen King" />
      </div>
    </div>
  );
};

export default FirstPage;
