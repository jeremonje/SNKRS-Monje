//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <ItemListContainer greeting='OUR MODELS: Nike, Fila, New Balance'></ItemListContainer>
      </main>
    </div>
  );
}

export default App;
