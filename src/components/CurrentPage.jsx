/** @format */

import React, { useContext } from "react";
import FormContext from "../context/FormContext";
import FifthPage from "./FifthPage";
import FirstPage from "./FirstPage";
import FourthPage from "./FourthPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

const CurrentPage = () => {
  const { pageIndex } = useContext(FormContext);

  if (pageIndex === 0) {
    return <FirstPage />;
  } else if (pageIndex === 1) {
    return <SecondPage />;
  } else if (pageIndex === 2) {
    return <ThirdPage />;
  } else if (pageIndex === 3) {
    return <FourthPage />;
  } else if (pageIndex === 4) {
    return <FifthPage />;
  }
};

export default CurrentPage;
