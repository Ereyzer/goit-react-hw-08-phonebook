import React from "react";
import styles from "./Filter.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

export class Filter extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };
  inputId = uuidv4();
  state = {
    filter: "",
  };

  // handleChange = (e) =>{
  //     const {value} = e.target;
  //     this.setState({
  //       filter: value,

  //   })
  //   this.props.setFilter(value.trim());
  // }

  render() {
    return (
      <div className={styles.Item}>
        <label className={styles.Label} htmlFor={this.inputId}>
          Find contacts by name
        </label>
        <input
          className={styles.Input}
          id={this.inputId}
          value={this.props.filter}
          onChange={this.props.handleChange}
        ></input>
      </div>
    );
  }
}
