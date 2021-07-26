import './App.css';
import React, { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addLocalStorage } from '../../service/helpers/localeStorage';
import { testFunc } from '../../service/helpers/filterTest';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const renderArr = findInFilter();

  async function handleSubmit(data) {
    const test = contacts.some(({ name }) => name === data.name);
    if (test) {
      toast.error(data.name + ' is already exist');
      return;
    }
    setFilter('');
    setContacts(prevState => {
      const newState = [...prevState, data];
      addLocalStorage(newState);
      return newState;
    });
    toast.success('you have new contact');
  }

  function findInFilter() {
    if (filter === '') return contacts;
    return contacts.filter(({ name }) => testFunc(filter, name));
  }

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value.trim());
  };

  const deleteContact = delId => {
    setContacts(prevState => {
      const newState = prevState.reduce(
        (acc, contact) => (contact.id !== delId ? [...acc, contact] : [...acc]),
        [],
      );
      addLocalStorage(newState);
      return newState;
    });
  };

  useEffect(() => {
    localStorage.getItem('list') &&
      setContacts(JSON.parse(localStorage.getItem('list')));
  }, []);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList contacts={renderArr} deleteContact={deleteContact} />
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
    </div>
  );
}

export default App;
