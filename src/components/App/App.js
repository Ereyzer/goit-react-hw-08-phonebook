import './App.css';
import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends React.Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: '',
  };

  componentDidMount() {
    localStorage.getItem('list') &&
      this.setState({ contacts: JSON.parse(localStorage.getItem('list')) });
  }

  addLocalStorage = () =>
    localStorage.setItem('list', JSON.stringify(this.state.contacts));

  handleSubmit = async data => {
    const test = this.state.contacts.some(({ name }) => name === data.name);
    if (test) {
      toast.error(data.name + ' is already exist');
      // alert(data.name + " is already exist");
      return;
    }
    // this.setState({
    //   filter: "",

    // })
    await this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
        filter: '',
      };
    });
    toast.success('you have new contact');
    // alert("you have new contact");
    await this.addLocalStorage();
  };

  findInFilter = () => {
    const { contacts, filter } = this.state;

    if (filter === '') return contacts;

    const testing = contacts.filter(({ name }) => this.testFunc(filter, name));
    return testing;
  };

  setFilter = value => {
    if (value === '') return;

    return this.setState({
      filter: value,
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      filter: value,
    });
    this.setFilter(value.trim());
  };

  testFunc(filter, name) {
    const test = name.slice(0, filter.length);
    return filter.toLowerCase() === test.toLowerCase() ? true : false;
  }

  deleteContact = async delId => {
    await this.setState(({ contacts }) => {
      return {
        contacts: contacts.reduce(
          (acc, contact) =>
            contact.id !== delId ? [...acc, contact] : [...acc],
          [],
        ),
      };
    });
    await this.addLocalStorage();
  };

  render() {
    let renderArr = this.findInFilter();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <ContactList contacts={renderArr} deleteContact={this.deleteContact} />
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
}

export default App;
