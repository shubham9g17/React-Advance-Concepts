import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./../../redux/counter/counterAction";
const FunctionalCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
};
export default FunctionalCounter;
