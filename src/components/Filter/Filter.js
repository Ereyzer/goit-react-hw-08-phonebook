import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export function Filter({ filter, handleChange }) {
  const inputId = React.useRef(uuidv4());
  return (
    <div className={styles.Item}>
      <label className={styles.Label} htmlFor={inputId.current}>
        Find contacts by name
      </label>
      <input
        className={styles.Input}
        id={inputId.current}
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
