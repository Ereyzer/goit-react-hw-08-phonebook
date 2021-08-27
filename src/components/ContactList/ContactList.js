import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';
import { deleteActions } from '../../redux/contacts/contacts-actions';
import { connect } from 'react-redux';
import { testFunc } from '../../service/helpers/filterTest';
import { toast } from 'react-toastify';

const ContactList = ({ contacts, onDeleteElement }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
};

function filterItems({ items, filter }) {
  if (filter === '') return items;
  return items.filter(({ name }) => testFunc(filter, name));
}

const mapStateToProps = ({ contacts }) => {
  return { contacts: filterItems(contacts) };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteElement: ({ id, name }) => {
      toast.info(name + ' is deleted');
      return dispatch(deleteActions(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
