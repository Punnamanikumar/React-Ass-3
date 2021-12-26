import "./Components/Background.css";
import React, { Component } from "react";
import RenderData from "./Components/RenderData";
import Back from "./Components/BackButton";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      department: "",
      rating: "",
      items: [],
      isFormSubmitted: false,
    };
  }

  getValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  showValue = (e) => {
    e.preventDefault();
    const tempObj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    const tempArr = this.state.items;
    tempArr.push(tempObj);
    this.setState({
      name: "",
      department: "",
      rating: "",
      items: [...tempArr],
    });
    this.setState({ isFormSubmitted: true });
  };

  goBack = () => {
    this.setState({ isFormSubmitted: false });
  };

  render() {
    console.log(this.state.items);
    let feedBackForm;
    let backButton;
    let displayFeedBack;

    if (!this.state.isFormSubmitted) {
      feedBackForm = (
        <div className="form">
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            className="input1"
            onChange={this.getValue}
            value={this.state.name}
          />
          <br />
          <label htmlFor="">Department : </label>
          <input
            type="text"
            className="input2"
            name="department"
            onChange={this.getValue}
            value={this.state.department}
          />
          <br />
          <label htmlFor="">Rating : </label>
          <input
            className="input3"
            type="number"
            name="rating"
            onChange={this.getValue}
            value={this.state.rating}
          />
          <br />
          <button name="submit" onClick={this.showValue}>
            Submit
          </button>
        </div>
      );
      backButton = null;
      displayFeedBack = null;
      console.log("Display Form");
    } else {
      feedBackForm = null;
      backButton = (
        <Back>
          <button className="button1" onClick={this.goBack}>
            Go Back
          </button>
        </Back>
      );
      displayFeedBack = (
        <div className="Parentdiv">
          {this.state.items.map((value, index) => {
            return (
              <RenderData
                name={value.name}
                department={value.department}
                rating={value.rating}
              />
            );
          })}
        </div>
      );
      console.log("Display Feedback");
    }

    return (
      <div>
        <div>
          {feedBackForm}
          {displayFeedBack}
          {backButton}
        </div>
      </div>
    );
  }
}

export default Form;
