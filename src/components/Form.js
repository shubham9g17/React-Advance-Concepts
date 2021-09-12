import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
  }
  state = {
    name: "",
  };
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <div>
        {/* Controlled Component */}
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          type="text"
          //   ref={(ref) => {
          //     this.myref = ref;
          //   }}
          ref={this.myref}
        />
        <button
          onClick={() => {
            console.log(this.myref, "ref");
          }}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default Form;
