import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './page/home/Home';
import ProductItem from './components/productItem/ProductItem';
import Cart from './page/cart/Cart';
import Login from './page/login/Login';
import Register from './page/register/Register';
import NotFound from './page/notFound/NotFound';
import NavBar from './components/navbar/Navbar'; // Corrected import statement
import styled from 'styled-components';
import './App.css';

function App() {
  const [search, setSearch] = useState('');

  const Body = styled.div`
    margin-top: 64px;
    line-height: 0;
  `;
  return (
    <Router> {/* Wrap the routes with the Router component */}
      <NavBar setSearch={setSearch} />
      <Body>
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/product/:id" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Body>
    </Router>
  );
}

export default App;
