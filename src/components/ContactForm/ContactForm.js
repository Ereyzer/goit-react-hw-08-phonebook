import React, { useState, useRef } from 'react';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import {
  contactsAction,
  filterAction,
} from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
export default function ContactForm() {
  const inputIdName = useRef(uuidv4());
  const inputIdNumber = useRef(uuidv4());
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const submitForm = e => {
    e.preventDefault();
    if (newName.trim() === '' || number.trim() === '') {
      toast.info('fill in all fields');
      return;
    }

    if (items.some(({ name }) => name === newName)) {
      toast.error(newName + ' is already exist');
      return;
    }

    dispatch(filterAction(''));
    dispatch(contactsAction({ name: newName, number }));

    toast.success('you have new contact');
    setNewName('');
    setNumber('');
  };

  return (
    <>
      <form className={style.Form} onSubmit={submitForm}>
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
        <label htmlFor={inputIdNumber.current} className={style.Label}>
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
          <Button type="submit" variant="contained" color="primary">
            Add contact
          </Button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}
