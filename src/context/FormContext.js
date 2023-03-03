/** @format */

import { createContext, useState } from "react";
import arcadeIMG from "../assets/images/icon-arcade.svg";
import AdvancedIMG from "../assets/images/icon-advanced.svg";
import ProIMG from "../assets/images/icon-pro.svg";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [data, setData] = useState([
    {
      id: 1,
      img: arcadeIMG,
      heading: "Arcade",
      paragraph: "$9/mo",
      active: false,
      plan: "monthly",
    },
    {
      id: 2,
      img: AdvancedIMG,
      heading: "Advanced",
      paragraph: "$12/mo",
      active: false,
      plan: "monthly",
    },
    {
      id: 3,
      img: ProIMG,
      heading: "Pro",
      paragraph: "$15/mo",
      active: false,
      plan: "monthly",
    },
  ]);

  const [thirdPageData, setThirdPageData] = useState([
    {
      id: 1,
      heading: "Online service",
      paragraph: "Access to multiplayer games",
      active: false,
      plan: "monthly",
      price: "+$1/mo",
    },
    {
      id: 2,
      heading: "Larger storage",
      paragraph: "Extra 1TB of cloud save",
      active: false,
      plan: "monthly",
      price: "+$2/mo",
    },
    {
      id: 3,
      heading: "Pro",
      paragraph: "$15/mo",
      active: false,
      plan: "monthly",
      price: "+$2/mo",
    },
  ]);

  let pageDetails = [
    {
      title: "Personal Info",
      detail: "Please provide your name, email address and phone number",
    },
    {
      title: "Select your Plan",
      detail: "You have the option of monthly or yearly billing",
    },
    {
      title: "Pick add-ons",
      detail: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing up",
      detail: "Double-check everything looks OK before confirming",
    },
    {
      title: "Thank you!",
      detail:
        "Thanks for confirming your subcription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com",
    },
  ];

  // ============== OverAll ==========

  const nextStep = () => {
    if (pageIndex == 4) {
      return;
    }

    setPageIndex(pageIndex + 1);
    console.log(pageIndex);
  };

  const goBack = () => {
    if (pageIndex == 0) {
      return;
    }

    setPageIndex(pageIndex - 1);
  };

  // ============== SecondPage ==========

  const handleSelectPlan = (e, datum) => {
    console.log(e.target.classList);
    let updatedData = data.map((each) =>
      each.id === datum.id
        ? { ...each, active: true }
        : { ...each, active: false }
    );
    console.log(updatedData);
    setData(updatedData);
  };

  const handleAddOns = (checked, datum) => {
    const updatedData = thirdPageData.map((each) => {
      if (datum.id === each.id) {
        return { ...each, active: checked };
      } else {
        return each;
      }
    });
    setThirdPageData(updatedData);
  };

  let FormData = {
    pageIndex,
    setPageIndex,
    pageDetails,
    nextStep,
    goBack,
    data,
    setData,
    handleSelectPlan,
    thirdPageData,
    handleAddOns
  };
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
