/** @format */

import { createContext, useState } from "react";
import arcadeIMG from "../assets/images/icon-arcade.svg";
import AdvancedIMG from "../assets/images/icon-advanced.svg";
import ProIMG from "../assets/images/icon-pro.svg";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({ children }) => {
  const [pageIndex, setPageIndex] = useState(1);
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
  const [monthly, setMonthly] = useState(true);
  const [state, setState] = useState({
    userDetails: {
      name: "",
      email: "",
      number: "",
    },
    errorMessage: {
      name: "",
      email: "",
      number: "",
    },
    secondPage: [
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
    ],
    thirdPage: [
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
    ],
    fourthPage: {
      choosenPlan: {},
      addOns: [],
    },
  });

  // ============== FristPage ==========

  const handleFirstPage = () => {
    let temp = {
      name: "",
      email: "",
      number: "",
    };
    if (state.userDetails.name == "") {
      temp = { ...temp, name: "This field is required" };
    }
    if (state.userDetails.email == "") {
      temp = { ...temp, email: "This field is required" };
    }
    if (state.userDetails.number == "") {
      temp = { ...temp, number: "This field is required" };
    }
    setState({ ...state, errorMessage: temp });
    if (
      state.userDetails.name &&
      state.userDetails.email &&
      state.userDetails.number
    ) {
      return "complete";
    } else {
      return;
    }
  };

  // ============== SecondPage ==========

  const handleSelectPlan = (datum) => {
    let updatedData = state.secondPage.map((each) =>
      each.id === datum.id
        ? { ...each, active: true }
        : { ...each, active: false }
    );

    setState({
      ...state,
      secondPage: updatedData,
      fourthPage: {
        ...state.fourthPage,
        choosenPlan: datum,
      },
    });
  };

  const handleMonthly = () => {
    if (monthly == true) {
      let tempData = state.secondPage.map((datum) => {
        return { ...datum, plan: "monthly" };
      });
      let tempData1 = state.thirdPage.map((datum) => {
        return { ...datum, plan: "monthly" };
      });
      setState({ ...state, secondPage: tempData, thirdPage: tempData1 });
    } else {
      let tempData = state.secondPage.map((datum) => {
        return { ...datum, plan: "yearly" };
      });
      let tempData1 = state.thirdPage.map((datum) => {
        return { ...datum, plan: "yearly" };
      });
      setState({ ...state, secondPage: tempData, thirdPage: tempData1 });
    }
  };

  const handleSecondPage = () => {
    let each = state.secondPage.find((datum) => datum.active == true);
    if (each) {
      return "complete";
    } else {
      return "not";
    }
  };

  // ============== ThirdPage ==========

  const handleAddOns = (checked, datum) => {
    const updatedData = state.thirdPage.map((each) => {
      if (datum.id === each.id) {
        return { ...each, active: checked };
      } else {
        return each;
      }
    });

    setState({
      ...state,
      thirdPage: updatedData,
      fourthPage: {
        ...state.fourthPage,
        addOns: updatedData.filter(
          (existingItem) => existingItem.active == true
        ),
      },
    });
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
    state,
    setState,
    pageIndex,
    setPageIndex,
    pageDetails,
    nextStep,
    goBack,
    handleSelectPlan,
    handleAddOns,
    handleMonthly,
    monthly,
    setMonthly,
  };
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
