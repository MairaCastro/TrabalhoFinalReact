import React from 'react';
import Styled from 'styled-components';

function ContactItem({ contact, removeContactDB, editContact }) {

  const Button = Styled.button`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #847c8e;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 10px 10px 10px 0;
`;

const Contato = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100svw;
  height: max-content;
  color: #ccc;
  font-size: 16px;
  padding-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const Buttons = Styled.div`
  display: flex;
  justify-content: space-between;
`

  return (
    <Contato>
      <p>Nome: {contact.name}</p>
      <p>Telefone: {contact.phone}</p>
      <p>Whatsapp: {contact.hasWhatsapp ? 'Sim' : 'Não'}</p>
      <p>Observações: {contact.notes}</p>
      <Buttons>
        <Button onClick={() => removeContactDB(contact.id)}>Excluir</Button>
        <Button onClick={() => editContact(contact)}>Editar</Button>
      </Buttons>
    </Contato>
  );
}

export default ContactItem;