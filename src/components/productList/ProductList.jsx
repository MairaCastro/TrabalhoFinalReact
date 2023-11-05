import React, { useState, useEffect } from 'react';
import ContactItem from '../product/Product';

function ProductList({ deleteContact, editContact, getContactsDB }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContactsDB().then(response => {
      setContacts(response.data);
    });
  }, []);

  return (
    <div className='list' style={{ maxHeight: '330px', overflow: 'auto' }}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} removeContactDB={deleteContact} editContact={editContact} />
      ))}
    </div>
  );
}


export default ContactList;