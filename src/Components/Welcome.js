import React, { Component } from "react";
import Sidebar from "./Sidebar.js";
export class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.username}</h1>
      </>
    );
  }
}

export default Welcome;
