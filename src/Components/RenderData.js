import React, { Component } from "react";

class RenderData extends Component {
  render() {
    return (
      <div className="Childdiv">
        Name: {this.props.name} | Department: {this.props.department} | Rating: {this.props.rating}
      </div>
    );
  }
}

export default RenderData;
