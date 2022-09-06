//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    {
    <BrowserRouter>
    <div className="App">
    <header>
      <NavBar></NavBar>
    </header>
    <main>
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
      
    </main> 
    
    </div>
    </BrowserRouter>
    }
    </>
  );
}

export default App;