import React, { useState } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    const isExistingContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isExistingContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts([...contacts, newContact]);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts list:</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
