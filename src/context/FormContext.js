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
      title: "Personal Info",
      detail: "Please provide your name, email address and phone number",
    },
    {
      title: "Personal Info",
      detail: "Please provide your name, email address and phone number",
    },
    {
      title: "Personal Info",
      detail: "Please provide your name, email address and phone number",
    },
    {
      title: "Personal Info",
      detail: "Please provide your name, email address and phone number",
    },
  ];
  let FormData = {
    pageIndex,
    setPageIndex,
    pageDetails,
  };
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
