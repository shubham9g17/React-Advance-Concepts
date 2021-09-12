import React, { Component } from "react";
import Child from "./Child";
const myref = React.createRef();
class Parent extends Component {
  render() {
    console.log(myref, "ref");
    return (
      <div>
        <Child ref={myref}>Press Parent</Child>
      </div>
    );
  }
}

export default Parent;
