import React, { Component } from "react";
import useLocation from "react-router-dom";

export class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
    };
  }

  render() {
    return (
      <h1>
        Saminamina Ay AY. Wakka Wakka Ay AY. Saminamina Sang Gadaiwa, this time
        for Africa UwU
      </h1>
    );
  }
}

export default ErrorPage;
