import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../redux/user/userAction";

class User extends Component {
  async componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    console.log(this.props, "prop");
    return <div>User</div>;
  }
}

const mapStateToProps = (state) => ({
  userData: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
