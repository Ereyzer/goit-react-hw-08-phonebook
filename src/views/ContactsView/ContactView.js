import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsView.css';
import { ReactComponent as AddImage } from '../../icons/add.svg';
import ContactForm from '../../components/ContactForm/ContactForm';

// const style = [styles.btn, styles['btn-circle']];
export default function ContactsView(params) {
  const [show, setShow] = useState(false);
  function openModal(e) {
    setShow(true);
  }
  return (
    <Container>
      <h2>Contacts</h2>
      <Button
        type="button"
        className={[styles.btn, styles['btn-circle']]}
        onClick={openModal}
      >
        <i className="fas fa-map">
          <AddImage width="40" height="40" fill="#fff" />
        </i>
      </Button>
      <Filter />

      <ContactList />
      <ContactForm show={show} onHide={() => setShow(false)} />
    </Container>
  );
}
