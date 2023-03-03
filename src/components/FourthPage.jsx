/** @format */
import React from "react";

const FourthPage = () => {
  return (
    <div className="fourth-page">
      <div className="d-flex flex-column gap-3">
        <div className="border-bottom d-flex justify-content-between p-2">
          <div>
            <p className="m-0 pb-1 fw-semibold">Arcade (Monthly)</p>
            <small className="text-decoration-underline fw-semibold">
              Change
            </small>
          </div>
          <p>$9/mo</p>
        </div>
        <div className="d-flex justify-content-between p-2">
          <div>
            <p className="m-0 pb-1 fw-semibold">Online service</p>
            <small className="d-none">Change</small>
          </div>
          <p>$9/mo</p>
        </div>
        <div className="d-flex justify-content-between p-2">
          <div>
            <p className="m-0 pb-1 fw-semibold">Arcade (Monthly)</p>
            <small className="d-none">Larger storage</small>
          </div>
          <p>$9/mo</p>
        </div>
      </div>
      <div className="d-flex justify-content-between p-2 pt-4">
        <p className="fw-semibold">Total (per Month)</p>
        <p>$12/mo</p>
      </div>
    </div>
  );
};

export default FourthPage;
