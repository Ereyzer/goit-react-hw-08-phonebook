import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import styles from './ContactsView.module.css';
import { ReactComponent as AddImage } from '../../icons/add.svg';

const style = [styles.btn, styles['btn-circle']];
export default function ContactsView(params) {
  return (
    <Container>
      <h2>Contacts</h2>
      <Button type="button" className={[...style]}>
        <i className="fas fa-map">
          <AddImage width="40" height="40" fill="#fff" />
        </i>
      </Button>
      <Filter />

      <ContactList />
    </Container>
  );
}
