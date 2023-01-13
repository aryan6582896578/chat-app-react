import React from "react";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "Tbot" };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.changer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  changer() {
    this.setState({ username: this.state.username + ":D" });
  }
  render() {
    return (
      <>
        <h1>Welcome {this.state.username}</h1>
      </>
    );
  }
}
export default Welcome;
