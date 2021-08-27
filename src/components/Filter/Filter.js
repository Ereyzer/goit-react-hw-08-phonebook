import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { filterAction } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
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
        onChange={e => dispatch(filterAction(`${e.target.value.trim()}`))}
      ></input>
    </div>
  );
}
