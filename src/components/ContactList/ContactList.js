import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

export class ContactList extends React.Component {
  static defaultProps = {
    renderArr: [],
  };
  static propTypes = {
    renderArr: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired
    ),
    deleteContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul>
        {this.props.contacts.map(({ name, number, id }) => (
          <li key={id}>
            <div className={styles.Item}>
              <p className={styles.Text}>
                {name}: <span>{number}</span>
              </p>
              <button
                type="button"
                className={styles.Button}
                onClick={() => this.props.deleteContact(id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
