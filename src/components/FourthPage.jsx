/** @format */
import React, { useContext } from "react";
import FormContext from "../context/FormContext";

const FourthPage = () => {
  const { state, monthly, setPageIndex } = useContext(FormContext);

  return (
    <div className="fourth-page">
      <div className="d-flex flex-column gap-3">
        <div className="border-bottom d-flex justify-content-between p-2">
          <div>
            <p className="m-0 pb-1 fw-semibold">
              {`${state.fourthPage.choosenPlan.heading}
              (${monthly ? "Monthly" : "Yearly"})`}
            </p>
            <small
              onClick={() => {
                setPageIndex(1);
              }}
              className="text-decoration-underline fs-7 fw-semibold"
            >
              Change
            </small>
          </div>
          <p>
            {monthly
              ? `$${state.fourthPage.choosenPlan.monthlyPrice}/mo`
              : `$${state.fourthPage.choosenPlan.yearlyPrice}/mo`}
          </p>
        </div>
        {state.fourthPage.addOns.map((datum) => {
          return (
            <div key={datum.id} className="d-flex justify-content-between p-2">
              <p className="m-0 pb-1 fw-semibold">{datum.heading}</p>
              <p className="m-0">{`$${
                monthly ? datum.monthlyPrice : datum.yearlyPrice
              }/mo`}</p>
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between p-2 pt-4">
        <p className="fw-semibold">Total (per Month)</p>
        <p>$12/mo</p>
      </div>
    </div>
  );
};

export default FourthPage;
