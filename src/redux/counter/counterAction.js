import { DECREMENT, INCREMENT } from "./counterTypes";

export const incrementCounter = () => ({
  type: INCREMENT,
  payload: null,
});
export const decrementCounter = () => ({
  type: DECREMENT,
  payload: null,
});
