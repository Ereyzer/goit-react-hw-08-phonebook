import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { filterAction } from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';

function Filter({ filter, onChange }) {
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
        onChange={onChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return { filter: state.contacts.filter };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(filterAction(`${e.target.value.trim()}`)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
