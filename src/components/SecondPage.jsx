/** @format */

import React from "react";
import arcadeIMG from "../assets/images/icon-arcade.svg";
import AdvancedIMG from "../assets/images/icon-advanced.svg";
import ProIMG from "../assets/images/icon-pro.svg";

const SecondPage = () => {
  const data = [
    {
      img: arcadeIMG,
      heading: "Arcade",
      paragraph: "$9/mo",
    },
    {
      img: AdvancedIMG,
      heading: "Advanced",
      paragraph: "$12/mo",
    },
    {
      img: ProIMG,
      heading: "Pro",
      paragraph: "$15/mo",
    },
  ];

  return (
    <div className="second-page">
      <div className="top-section d-flex flex-column gap-3 text-center">
        {data.map((datum) => {
          return (
            <div className="d-flex gap-2 align-items-center p-2">
              <img src={datum.img} alt="" />
              <div>
                <h4>{datum.heading}</h4>
                <p>{datum.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bottom-section">
        <p>Monthly</p>
        <div>toggle</div>
        <p>Yearly</p>
      </div>
    </div>
  );
};

export default SecondPage;
