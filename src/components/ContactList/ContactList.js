import React from "react";
import styles from "./ContactList.module.css";

export class ContactList extends React.Component {
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
