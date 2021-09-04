import React, { useEffect } from 'react';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { contactOperations } from '../../redux/contacts';
import Loading from '../Loader/Loader';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContactsWithFilter);
  const isLoading = useSelector(contactsSelectors.isLoading);
  const dispatch = useDispatch();

  const onDeleteElement = ({ id, name }) => {
    toast.info(name + ' is deleted');
    return dispatch(contactOperations.deleteContact(id));
  };

  useEffect(() => {
    dispatch(contactOperations.fetchContacts());
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <ul>
        {contacts.map(({ data: { name, number }, id }) => {
          return (
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
          );
        })}
      </ul>
    );
  }
}
