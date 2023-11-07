import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LoginContainer = styled.div`
  margin: 0;
  width: 100vw;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: linear-gradient(25deg, #e6bc74 0%, #551e1e 86%); */
  background: url("https://en.idei.club/uploads/posts/2023-06/1686010099_en-idei-club-p-coffee-beans-leaf-dizain-pinterest-20.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #452f2f;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #5d4037;
  background-color: #5d4037;
  border-radius: 4px;
  width: 200px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #795548;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Title = styled.h3`
color: #fff;
`;

function Register() {
  document.title = "Cadastre-se | Coffee Deluxe Java"
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [receiveInfo, setReceiveInfo] = useState(false);
  const [passIncorrect, setPassIncorrect] = useState(false);

  const isFormValid = name.length > 0 && email.length > 0 && pass.length > 0;

  const http = axios.create({
    baseURL: "http://localhost:3000"
  });

  const addUserToDB = user => http.post('users', user);

  const saveUser = async (name, email, pass, receiveInfo) => {
    try {
      const response = await axios.get('/db.json');
      const { users } = response.data;
      console.log(response)
      
      const userExists = users.some(user => user.email === email);
      if (userExists) {
        alert('Usuário já cadastrado');
        return;
      }
      
      const newUser = {
        nome: name,
        email,
        senha: pass,
      };
      await addUserToDB(newUser);
      console.log('User saved successfully!');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <LoginContainer>
      <LoginForm>
        <Title>Cadastre-se</Title> 
        <Input
          type="text"
          onChange={({ target: { value } }) => setName(value)}
          value={name}
          placeholder="Nome"
        />

        <Input 
          type="email"
          onChange={({ target: { value } }) => setEmail(value)}
          value={email}
          placeholder="Email"
        />

        <Input
          type="password"
          onChange={({ target: { value } }) => setPass(value)}
          value={pass}
          placeholder="Senha"
        />

        <CheckboxLabel>
          <input
            type="checkbox"
            checked={receiveInfo}
            onChange={({ target: { checked } }) => setReceiveInfo(checked)}
          />
          Desejo receber informações
        </CheckboxLabel>

        {passIncorrect && <ErrorMessage>Senha incorreta</ErrorMessage>}

        <Button
          type="button"
          onClick={() => saveUser(name, email, pass, receiveInfo)}
          disabled={!isFormValid}
        >
          Cadastrar
        </Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Register;