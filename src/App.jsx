import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import Product from './components/productItem/ProductItem';
import Cart from './page/cart/Cart';
import Login from './page/login/Login';
import Register from './page/register/Register';
import NotFound from './page/notFound/NotFound';
import NavBar from './components/navbar/Navbar'; // Corrected import statement
import './App.css';

function App() {
  return (
    <Router> {/* Wrap the routes with the Router component */}
      <NavBar /> {/* Use the correct component name */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
