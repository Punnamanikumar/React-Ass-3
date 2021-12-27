import React, { Component } from "react";
import "../Components/Background.css";

class Back extends Component {
  render() {
    return (
      <div>
        <h1 className="bh1">EMPLOYEE FEEDBACK DATA</h1>
        <div className="back">{this.props.children}</div>
      </div>
    );
  }
}

export default Back;
