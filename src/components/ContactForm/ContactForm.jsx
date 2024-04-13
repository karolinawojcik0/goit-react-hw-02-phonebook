import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ButtonForm, FormLabel, InputLabel } from './ContactForm.css';

export const ContactForm = ({ addContact }) => {
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
    addContact(newContact);
    setName('');
    setTel('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>
        Name:
        <InputLabel
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleNameChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Phone number:
        <InputLabel
          type="tel"
          name="tel"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={tel}
          onChange={handleTelChange}
          required
        />
      </FormLabel>
      <ButtonForm button type="submit">
        Add contact
      </ButtonForm>
    </form>
  );
};
