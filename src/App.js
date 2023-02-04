
import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
    <UserDetails />

      <Counter />
    </div>
  );
}

export default App;
