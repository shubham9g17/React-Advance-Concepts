import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  handleIncrement = (count, ev) => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        Count: {this.state.count}
        <br />
        <button onClick={(ev) => this.handleIncrement(this.state.count, ev)}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
