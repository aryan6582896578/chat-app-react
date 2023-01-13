import React from "react";

class Welcome extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Welcome {this.props.username}</h1>
      </>
    );
  }
}
export default Welcome;
