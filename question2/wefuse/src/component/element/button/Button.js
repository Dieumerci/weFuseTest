import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <a href="www.google.com" className="waves-effect waves-light btn">
        <i className="material-icons left">cloud</i>button
      </a>
    );
  }
}

export default Button;
