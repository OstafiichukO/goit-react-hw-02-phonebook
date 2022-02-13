import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Section from './components/Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onAddContact = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    const filter = this.state.filter;
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onAddContact={this.onAddContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter value={filter} filterChange={this.onFilter} />
          <ContactList
            contacts={this.state.contacts}
            onDelete={this.onDelete}
          />
        </Section>
      </div>
    );
  }
}

export default App;
