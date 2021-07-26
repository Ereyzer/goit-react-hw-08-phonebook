import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';

export function ContactForm({ handleSubmit }) {
  const inputIdName = useRef(uuidv4());
  const inputIdNumber = useRef(uuidv4());
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const submitForm = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      toast.info('fill in all fields');
      return;
    }
    handleSubmit({ id: uuidv4(), ...{ name, number } });
    setName('');
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
          value={name}
          onChange={e => setName(e.target.value)}
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

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
