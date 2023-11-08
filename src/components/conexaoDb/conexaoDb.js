import axios from 'axios';

const http = axios.create({
    baseURL: "http://localhost:3000"
  });

  // const getContactsDB = () => http.get('/contacts');

  // deleteContactDB(id).then(() => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  //   setCurrentContact(defaultContact);
  //   location.reload(true);
  // }).catch(error => {
  //   console.error('An error occurred while deleting the contact:', error);
  // });

  // -----------------------------------------------------------------
  
  // const addContactDB = contact => http.post('/contacts', contact);

  // function addNewContactDB(contact) {
  //   addContactDB(contact).then(response => {  
  //     setContacts([...contacts, response.data]);
  //     setCurrentContact(defaultContact);
  //     setEditMode(false);
  //   });
  // }

  // -----------------------------------------------------------------

  // const deleteContactDB = id => http.delete(`/contacts/${id}`);

  // function removeContactDB(id) {
  //   var answer = window.confirm("Deseja excluir este contato?");
  //   if (answer) {
  //     deleteContactDB(id).then(() => {
  //       setContacts(contacts.filter(contact => contact.id !== id));
  //       setCurrentContact(defaultContact);
  //       location.reload(true);
  //     }).catch(error => {
  //       console.error('An error occurred while deleting the contact:', error);
  //     });
  //   }
  //  }
   
  // -----------------------------------------------------------------

  // const updateContactDB = (id, updatedContact) => http.put(`/contacts/${id}`, updatedContact);

  export default http;