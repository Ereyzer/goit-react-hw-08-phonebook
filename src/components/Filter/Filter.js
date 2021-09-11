import React from 'react';
import styles from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import FormGroup from '../FormGroup/FormGroup';

export default function Filter() {
  const filter = useSelector(contactsSelectors.getFilter);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const inputId = React.useRef(uuidv4());
  return (
    contacts.length > 1 && (
      <div className={styles.Item}>
        <FormGroup
          groupClass="mb-3"
          controlId={inputId.current}
          labelClass={styles.Label}
          labelText="Find contacts by name"
          controlProps={{
            type: 'search',
            value: filter,
            onChange: e =>
              dispatch(
                contactsActions.filterAction(`${e.target.value.trim()}`),
              ),
          }}
        />
      </div>
    )
  );
}
