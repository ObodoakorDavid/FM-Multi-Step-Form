/** @format */

import { createContext, useState } from "react";

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

  const nextStep = () => {
    if (pageIndex == 4) {
      return;
    }

    setPageIndex(pageIndex + 1);
    console.log(pageIndex);
  };

  const goBack = () => {
    if (pageIndex == 1) {
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
  };
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
