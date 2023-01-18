import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome {this.props.username}</h1>
      </>
    );
  }
}
Welcome.defaultProps = {
  username: "Mausam",
};

export default Welcome;
