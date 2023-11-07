import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderArea, LeftLinks, CenterLinks, RightLinks, InputSearch, IconButton, Icon } from './styled'

export default function NavBar({ setSearch }){
  const [search, setSearchLocal] = useState('');
  const searchInput = useRef(null);

  const handleSearchChange = (event) => {
    // searchInput = e.target.value
    const valor = event.target.value;    
    setSearchLocal(valor);
  };

  const handleSearchClick = () => {
    setSearch(search);
  };

  useEffect(() => {
    searchInput.current.focus();
  }, [search]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(search);
    }
   };

  return (
    <>
      <HeaderArea>
        <LeftLinks>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho</Link>
        </LeftLinks>

        <CenterLinks>
          <InputSearch ref={searchInput} value={search} onChange={handleSearchChange} onKeyDown={handleKeyDown}/>
          <IconButton onClick={handleSearchClick}>
            <Icon src="https://cdn-icons-png.flaticon.com/512/3626/3626504.png" alt="icon" />
          </IconButton>
        </CenterLinks>

        <RightLinks>
          <Link to="/login">Login</Link>
          <Link to="/register">Cadastro</Link>
        </RightLinks>
      </HeaderArea>
    </>
  );
}
