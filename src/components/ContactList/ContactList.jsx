import React from 'react';
import { BtnRemove } from './ContactList.css';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.tel}
          <BtnRemove onClick={() => removeContact(contact.id)}>
            Remove
          </BtnRemove>
        </li>
      ))}
    </ul>
  );
};
