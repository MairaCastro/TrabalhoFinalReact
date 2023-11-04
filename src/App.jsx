import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import Product from './page/product/Product';
import Cart from './page/cart/Cart';
import Login from './page/login/Login';
import Register from './page/register/Register';
import NotFound from './page/notFound/NotFound';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={<NotFound />} /> // Rota para página de erro 404 */}
        </Routes>
      </Router>
    </>
  )
}

export default App
