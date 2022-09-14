//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CartProvider from './Context/CartContext';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cartt' element={<ItemDetailContainer />} />
            </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;