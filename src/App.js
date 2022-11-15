
import logo from './logo.svg';
import './App.css';
import Favorites from './components/Favorites';
import Books from './components/Books';
import Modal from './components/Modal';
import Search from './components/Search';
import { useGlobalContext } from './context';

function App() {
  const {showModal} = useGlobalContext()
  return (
    <div className="App">
      <Favorites/>
      <Search />
      <Books/> 
      {showModal && <Modal />}
    </div>
  );
}

export default App;
