import React, { useState, useRef } from 'react';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { contactOperations } from '../../redux/contacts';
import { Button, Modal } from 'react-bootstrap';
import { createPortal } from 'react-dom';

export default function ContactForm({ show, onHide }) {
  const inputIdName = useRef(uuidv4());
  const inputIdNumber = useRef(uuidv4());
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    if (newName.trim() === '' || number.trim() === '') {
      toast.info('fill in all fields');
      return;
    }

    if (
      items.some(({ name }) => name.toLowerCase() === newName.toLowerCase())
    ) {
      toast.error(newName + ' is already exist');
      return;
    }

    dispatch(contactsActions.filterAction(''));
    dispatch(contactOperations.addNewContact({ name: newName, number }));

    toast.success('you have new contact');
    setNewName('');
    setNumber('');
    onHide();
  };

  return createPortal(
    <Modal show={show} fullscreen={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="form" className={style.Form} onSubmit={submitForm}>
          <label htmlFor={inputIdName.current} className={style.Label}>
            Name
          </label>
          <input
            id={inputIdName.current}
            className={style.Input}
            type="text"
            name="name"
            value={newName}
            onChange={e => setNewName(e.target.value)}
          ></input>
          <label
            htmlFor={inputIdNumber.current}
            className={style.Label}
            name="number"
          >
            Number
          </label>
          <input
            id={inputIdNumber.current}
            className={style.Input}
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          ></input>
          <div className={style.AddBtn}>
            <Button type="submit" variant="primary" color="primary">
              Add contact
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>,
    document.getElementById('root-portal'),
  );
}
