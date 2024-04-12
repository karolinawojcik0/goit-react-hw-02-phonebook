import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleTelChange = e => {
    setTel(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || tel.trim() === '') return;
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      tel: tel.trim(),
    };
    setContacts([...contacts, newContact]);
    setName('');
    setTel('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleNameChange}
            required
          />
        </label>
        <label>
          Phone number:
          <input
            type="tel"
            name="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={tel}
            onChange={handleTelChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts list:</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} - {contact.tel}
          </li>
        ))}
      </ul>
    </div>
  );
};
