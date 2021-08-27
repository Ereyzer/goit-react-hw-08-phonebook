import React from 'react';
import styles from './ContactList.module.css';
import { deleteActions } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getContactsWithFilter } from '../../redux/contacts/contacts-selectors';

export default function ContactList() {
  const contacts = useSelector(getContactsWithFilter);
  const dispatch = useDispatch();

  const onDeleteElement = ({ id, name }) => {
    toast.info(name + ' is deleted');
    return dispatch(deleteActions(id));
  };

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
              onClick={() => onDeleteElement({ id, name })}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
