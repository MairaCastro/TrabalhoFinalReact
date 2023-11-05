import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = () => {
  const HeaderArea = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; /* Updated */
    background-color: #452f2f;
    padding: 20px;
    z-index: 999;
    box-shadow: 5px 0 5px #000;

    a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  const LeftLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
  `;

  const RightLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-right: 50px;
  `;

  return (
    <>
      <HeaderArea>
        <LeftLinks>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho</Link>
        </LeftLinks>
        <RightLinks>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastro</Link>
        </RightLinks>
      </HeaderArea>
    </>
  );
};

export default NavBar;
