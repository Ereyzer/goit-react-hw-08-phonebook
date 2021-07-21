import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export class ContactForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  inputIdName = uuidv4();
  inputIdNumber = uuidv4();

  state = {
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const testName = name.trim();
    const testNumber = number.trim();
    if (testName === "" || testNumber === "") {
      alert("fill in all fields");
      return;
    }

    this.props.handleSubmit({ id: uuidv4(), ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { inputIdName, inputIdNumber, state, submitForm } = this;
    return (
      <form className={style.Form} onSubmit={submitForm}>
        <label htmlFor={inputIdName} className={style.Label}>
          Name
        </label>
        <input
          id={inputIdName}
          className={style.Input}
          type="text"
          name="name"
          value={state.name}
          onChange={this.handleChange}
        ></input>
        <label htmlFor={inputIdNumber} className={style.Label}>
          Number
        </label>
        <input
          id={inputIdNumber}
          className={style.Input}
          type="tel"
          name="number"
          value={state.number}
          onChange={this.handleChange}
        ></input>

        {/* <Input 
            className={style.Item}
            name="name"
            label="Name"
            sendValue={this.sendValue}
            
            />
            <Input 
            className={style.Item}
            name="namber"
            label="Number"
            sendValue={this.sendValue}
            
            /> */}
        <button type="submit" className={style.AddBtn}>
          Add contact
        </button>
      </form>
    );
  }
}
