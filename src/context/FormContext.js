/** @format */

import { createContext, useState } from "react";
import arcadeIMG from "../assets/images/icon-arcade.svg";
import AdvancedIMG from "../assets/images/icon-advanced.svg";
import ProIMG from "../assets/images/icon-pro.svg";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(1);
  const [monthly, setMonthly] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [data, setData] = useState([
    {
      id: 1,
      img: arcadeIMG,
      heading: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      active: false,
      plan: "monthly",
    },
    {
      id: 2,
      img: AdvancedIMG,
      heading: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      active: false,
      plan: "monthly",
    },
    {
      id: 3,
      img: ProIMG,
      heading: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
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
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: 2,
      heading: "Larger storage",
      paragraph: "Extra 1TB of cloud save",
      active: false,
      plan: "monthly",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: 3,
      heading: "Pro",
      paragraph: "$15/mo",
      active: false,
      plan: "monthly",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ]);

  const [lastPageData, setLastPageData] = useState({
    choosenPlan: {},
    addOns: [],
  });

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

  // ============== FristPage ==========

  const handleFirstPage = () => {
    let temp = {
      name: "",
      email: "",
      number: "",
    };
    if (userDetails.name == "") {
      temp = { ...temp, name: "This field is required" };
    }
    if (userDetails.email == "") {
      temp = { ...temp, email: "This field is required" };
    }
    if (userDetails.number == "") {
      temp = { ...temp, number: "This field is required" };
    }
    setErrorMessage(temp);
    if (userDetails.name && userDetails.email && userDetails.number) {
      return "complete";
    } else {
      return;
    }
  };

  // ============== SecondPage ==========

  const handleSelectPlan = (datum) => {
    let updatedData = data.map((each) =>
      each.id === datum.id
        ? { ...each, active: true }
        : { ...each, active: false }
    );
    setLastPageData({ ...lastPageData, choosenPlan: datum });
    // let updatedData = data.map((each) => {
    //   if (each.id == datum.id) {
    //     return { ...each, active: true };
    //   } else {
    //     return each;
    //   }
    // });
    console.log(datum);
    setData(updatedData);
  };

  const handleMonthly = () => {
    if (monthly == true) {
      let tempData = data.map((datum) => {
        return { ...datum, plan: "monthly" };
      });
      setData(tempData);
      let tempData1 = thirdPageData.map((datum) => {
        return { ...datum, plan: "monthly" };
      });
      setThirdPageData(tempData1);
    } else {
      let tempData = data.map((datum) => {
        return { ...datum, plan: "yearly" };
      });
      setData(tempData);
      let tempData1 = thirdPageData.map((datum) => {
        return { ...datum, plan: "yearly" };
      });
      setThirdPageData(tempData1);
    }
  };

  const handleSecondPage = () => {
    let each = data.find((datum) => datum.active == true);
    console.log(each);
    if (each) {
      return "complete";
    } else {
      return "not";
    }
  };

  // ============== ThirdPage ==========

  const handleAddOns = (checked, datum) => {
    const updatedData = thirdPageData.map((each) => {
      // ============
      if (datum.id === each.id) {
        return { ...each, active: checked };
      } else {
        return each;
      }
    });
    setThirdPageData(updatedData);
    console.log(lastPageData);
  };

  // ============== OverAll ==========

  const nextStep = () => {
    if (pageIndex == 4) {
      return;
    }

    // if (handleFirstPage() == "complete" && pageIndex == 0) {
    //   setPageIndex((prev) => prev + 1);
    // }
    // console.log(handleSecondPage());
    // if (handleSecondPage() == "complete" && pageIndex == 1) {
    //   setPageIndex((prev) => prev + 1);
    // }

    // ==============
    setPageIndex((prev) => prev + 1);
  };

  const goBack = () => {
    if (pageIndex == 0) {
      return;
    }

    setPageIndex(pageIndex - 1);
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
    handleAddOns,
    userDetails,
    setUserDetails,
    errorMessage,
    setErrorMessage,
    handleMonthly,
    monthly,
    setMonthly,
    lastPageData,
  };
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
