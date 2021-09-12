import React, { Component } from "react";
import Toolbar from "./Toolbar";
import ThemeContext from "./context";
import FunctionComp from "./Functional/FunctionComp";

class Main extends Component {
  state = {
    themeContext: {
      theme: "red",
      toggleTheme: () => {
        console.log("toggle theme");
      },
    },
  };
  render() {
    return (
      <div>
        <FunctionComp />
        <ThemeContext.Provider value={this.state.themeContext}>
          <Toolbar />
          <FunctionComp />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default Main;
