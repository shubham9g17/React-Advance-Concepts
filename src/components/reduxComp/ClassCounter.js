import React, { Component } from "react";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./../../redux/counter/counterAction";

class ClassCounter extends Component {
  render() {
    const { count, incrementCounter, decrementCounter } = this.props;

    return (
      <div>
        Count: {count}
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state.counter.count,
});
const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
