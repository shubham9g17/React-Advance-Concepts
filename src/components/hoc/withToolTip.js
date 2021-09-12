import React from "react";
function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = { showTooltip: false };
    mouseOut = () => this.setState({ showTooltip: false });
    mouseOver = () => this.setState({ showTooltip: true });
    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}
export default withToolTip;
