//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailContainer';


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