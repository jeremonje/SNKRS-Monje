//import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import ItemListContainer1 from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <ItemListContainer1></ItemListContainer1>
      </main>
    </div>
  );
}

export default App;
