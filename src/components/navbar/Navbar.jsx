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

  // const handleBlur = () => {
  //   setSearchLocal(searchInput.current.value);
  //   searchInput.current.focus();
  // };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSearch(search);
    }
   };

//   const HeaderArea = styled.header`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between; /* Updated */
//     background-color: #452f2f;
//     padding: 20px;
//     z-index: 999;
//     box-shadow: 5px 0 5px #000;

//     a {
//       text-decoration: none;
//       color: white;

//       &:hover {
//         text-decoration: underline;
//       }
//     }
//   `;

//   const LeftLinks = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 50px;
//   `;

//   const CenterLinks = styled.div`
//     display: flex;
//     width: 30%;
//     align-items: center;
//     justify-content: space-evenly;
//     gap: 10px;
//   `;

//   const RightLinks = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 50px;
//     margin-right: 50px;
//   `;

// const InputSearch = styled.input`
//   color: #000;
//     border-radius: 30px;
//     width: 100%;
//     height: 30px;
//     font-size: 18px;
//     padding: 0 15px;
//     background-color: #452f2f;
//     color: #fff;
//     box-shadow: 0px 1px 0 0 #ffffff;
//     border: none;
//     border-radius: 0;
//     text-decoration: none;
//     outline: none;
//     /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
//       rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
//       rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
// `;

// const IconButton = styled.div`
//   cursor: pointer;
//   border: none;
//   padding: 0;
//   background: none;
//   outline: none;
//   box-shadow: none;

//   img {
//     filter: invert(1);
//     outline: none;
//   }
// `;

// const Icon = styled.img`
//   width: 24px;
//   height: 24px;
// `;

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
