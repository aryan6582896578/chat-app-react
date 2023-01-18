import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: " ",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
    if (event.target.value.length > 20) {
      this.setState({ name: "" });
      alert("Maximum Length Exceeded");
    }
  }
  render() {
    return (
      <>
        <h1>Welcome {this.state.name}</h1>
        <div className="bottom">
          <form>
            <input
              type="text"
              placeholder="Your Name here"
              onChange={this.handleChange}
            ></input>
          </form>
        </div>
      </>
    );
  }
}
Welcome.defaultProps = {
  username: "Mausam",
};

export default Welcome;
