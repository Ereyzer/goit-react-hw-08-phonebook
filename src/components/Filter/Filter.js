import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const inputId = React.useRef(uuidv4());
  return (
    <div className={styles.Item}>
      {/* <label className={styles.Label} htmlFor={inputId.current}>
        Find contacts by name
      </label>
      <input
        className={styles.Input}
        id={inputId.current}
        value={filter}
        onChange={e =>
          dispatch(contactsActions.filterAction(`${e.target.value.trim()}`))
        }
      ></input> */}
      <Form.Label className={styles.Label}>Find contacts by name</Form.Label>
      <Form.Control
        type="search"
        value={filter}
        onChange={e =>
          dispatch(contactsActions.filterAction(`${e.target.value.trim()}`))
        }
      />
    </div>
  );
}
