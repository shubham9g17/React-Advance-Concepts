import React, { useContext } from "react";
import ThemeContext from "./../context";

function FunctionComp(props) {
  const themeContext = useContext(ThemeContext);
  return <div>{themeContext.theme}</div>;
}

export default FunctionComp;
