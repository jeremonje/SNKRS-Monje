//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailConteiner/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import CartProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';
import { PaginaFirebase } from './components/PaginaFirebase/PaginaFirebase';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
            <NavBar></NavBar>
            <Routes>              
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:category' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/contact' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/productos' element={<ItemListContainer />} />
                <Route path='/firebase' element={<PaginaFirebase />} />
            </Routes>
        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;