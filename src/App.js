import React, { useEffect } from 'react';
import './styles/App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import Home from './components/pages/Home/Home';
import Menu from './components/molecules/Menu/Menu';
import Cart from './components/pages/Cart/Cart';
import Checkout from './components/pages/Checkout/Checkout';
import { getCartFromStorage } from './store/actions/cartActions';
import Success from './components/pages/Success/Success';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Cart is saved in local storage so you can retrieve if user doesn't pay
    dispatch(getCartFromStorage());
  }, [dispatch]);

  return (
    <Router>
      <Menu />

      <Routes>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
