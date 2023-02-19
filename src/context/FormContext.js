/** @format */

import { createContext } from "react";

const FormContext = createContext();

export default FormContext;

export const FormProvider = ({ children }) => {
  let FormData = {};
  return (
    <FormContext.Provider value={FormData}>{children}</FormContext.Provider>
  );
};
