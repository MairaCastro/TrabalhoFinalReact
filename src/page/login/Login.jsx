import React, { useState, useEffect } from 'react';
import { getItem, setItem } from '../../services/LocalStorageFuncs';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const LoginContainer = styled.div`
  margin: 0;
  width: 100svw;
  height: 100vh;
  padding: 0; 
  box-sizing: border-box;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: linear-gradient(
      25deg,
      #e6bc74 0%,
      #551e1e 86%
    ); */
    background: url("https://en.idei.club/uploads/posts/2023-06/1686010099_en-idei-club-p-coffee-beans-leaf-dizain-pinterest-20.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
`;

const LoginForm = styled.form`
  display: flex;
  opacity: 0.9;
  /* margin-top: -200px; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #452f2f;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  color: #fff;
`;

const NoAccountLink = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

export default function Login() {
  document.title = "Login | Coffe Deluxe Java"

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [userExistsWrongPass, setUserExistsWrongPass] = useState(true);

  const isFormValid = email.length > 0 && pass.length > 0;

  const checkUserExists = async () => {
    const response = await axios.get('/db.json');
    const { users } = response.data;
    const userExists = users.find((user) => user.email === email && user.senha === pass);
    setUserExists(userExists)
    if (userExists) {
      localStorage.setItem("idUser", userExists.id)
      window.location.href = '/';
    }
    else {
      setUserExistsWrongPass(false)
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
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

        <NoAccountLink>
          <div>Não tem conta? </div>&nbsp;
          <Link to="/register">Registrar-se</Link>
        </NoAccountLink><br />

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
