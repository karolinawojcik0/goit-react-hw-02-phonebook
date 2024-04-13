import React from 'react';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} - {contact.tel}
          <button onClick={() => removeContact(contact.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
