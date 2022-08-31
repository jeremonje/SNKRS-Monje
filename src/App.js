//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>

        
        <ItemDetailContainer/>
      </main>
      
    </div>
  );
}

export default App;
/*
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

<ItemListContainer greeting='OUR MODELS: Nike, Fila, New Balance'></ItemListContainer>

*/