import React from "react";
const Child = React.forwardRef((props, ref) => (
  <button id="child" ref={ref}>
    {props.children}
  </button>
));
export default Child;
