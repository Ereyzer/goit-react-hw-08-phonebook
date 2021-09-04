import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
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
        onChange={e =>
          dispatch(contactsActions.filterAction(`${e.target.value.trim()}`))
        }
      ></input>
    </div>
  );
}
