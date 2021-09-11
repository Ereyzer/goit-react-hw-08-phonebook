import React, { useState, useRef } from 'react';
import style from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import { contactOperations } from '../../redux/contacts';
import { Button, Modal, Form } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import FormGroup from '../FormGroup/FormGroup';

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
    <Modal
      show={show}
      size="lg"
      // dialogClassName={style.Modal}
      aria-labelledby="example-custom-modal-styling-title"
      centered
      keyboard
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Form id="form" className={style.Form} onSubmit={submitForm}>
        <FormGroup
          groupClass="mb-3"
          controlId={inputIdName.current}
          labelText="Name"
          controlProps={{
            className: style.Input,
            type: 'text',
            name: 'name',
            value: newName,
            onChange: e => setNewName(e.target.value),
          }}
        />
        <FormGroup
          groupClass="mb-3"
          controlId={inputIdNumber.current}
          labelText="Number"
          controlProps={{
            className: style.Input,
            type: 'tel',
            name: 'number',
            value: number,
            onChange: e => setNumber(e.target.value),
          }}
        />
        <div className={style.AddBtn}>
          <Button type="submit" variant="primary" color="primary">
            Add contact
          </Button>
        </div>
      </Form>
    </Modal>,
    document.getElementById('root-portal'),
  );
}
