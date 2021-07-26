import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <div className={styles.Item}>
            <p className={styles.Text}>
              {name}: <span>{number}</span>
            </p>
            <button
              type="button"
              className={styles.Button}
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactList.defaultProps = {
  renderArr: [],
};

ContactList.propTypes = {
  renderArr: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ),
  deleteContact: PropTypes.func.isRequired,
};
