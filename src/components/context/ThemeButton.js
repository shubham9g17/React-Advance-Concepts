import React, { Component } from "react";
import ThemeContext from "./context";

class ThemeButton extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
      <div>
        {/* {this.context.theme} */}

        <ThemeContext.Consumer>
          {({ theme }) => <div>{theme}</div>}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default ThemeButton;
