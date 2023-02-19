/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const CurrentPage = () => {
  const { pageIndex, pageDetails } = useContext(FormContext);

  if (pageIndex === 1) {
    return <FirstPage />;
  } else if (pageIndex === 2) {
    return <SecondPage />;
  } else if (pageIndex === 3) {
    return <ThirdPage />;
  } else if (pageIndex === 4) {
    return <FourthPage />;
  }
};

export default CurrentPage;
