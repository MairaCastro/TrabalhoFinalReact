import React, { useState, useEffect } from 'react';
import { getItem, setItem } from '../../services/LocalStorageFuncs';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom'
import axios from 'axios';

const LoginContainer = styled.div`
  margin: 0;
  width: 100svw;
  padding: 0; 
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
      25deg,
      #e6bc74 0%,
      #551e1e 86%
    );
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

function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [userExistsWrongPass, setUserExistsWrongPass] = useState(true);

  const isFormValid = email.length > 0 && pass.length > 0;

    const checkUserExists = async () => {
      const response = await axios.get('/db.json');
      const { users } = response.data;
      const userExists = users.some((user) => user.email === email && user.senha === pass);
      setUserExists(userExists)
      if (userExists) {
        window.location.href = '/';
      }
      else{
        setUserExistsWrongPass(false)
      }
    };

  return (
    <LoginContainer>
      <LoginForm>
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
        
        {userExistsWrongPass ? (
          (<div></div>)
        ) : <ErrorMessage>Senha incorreta</ErrorMessage>
        }

        <Button
          type="button"
          onClick={() => {
            checkUserExists()
          }}
          disabled={!isFormValid}
        >
          Entrar
        </Button>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
