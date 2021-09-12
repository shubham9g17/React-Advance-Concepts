import React, { Component } from "react";
import withToolTip from "./withToolTip";
class Movies extends Component {
  render() {
    return <div>Movie {this.props.showTooltip && "Show ToolTip"}</div>;
  }
}

export default withToolTip(Movies);
