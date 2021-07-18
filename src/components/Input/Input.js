import React from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Input.module.css";

export class Input extends React.Component {
  constructor({ name, label, className, sendValue, func }) {
    super();
    this.state = {
      [name]: "",
    };
    this.name = name;
    this.label = label;
    this.className = className;
    this.sendValue = sendValue;
  }

  inputId = uuidv4();

  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        [this.props.name]: e.target.value,
      };
    });
  };
  render() {
    const { name, label, className, state, inputId } = this;
    return (
      <div className={className}>
        <label htmlFor={inputId} className={style.Label}>
          {label}
        </label>
        <input
          id={inputId}
          className={style.Input}
          type="text"
          name={name}
          value={state[name]}
          onChange={this.handleChange}
        ></input>
      </div>
    );
  }
}
