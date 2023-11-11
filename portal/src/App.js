
import './App.css';
import logo from "./images/svg/logo.svg"
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='logo-adjuster'>
      <img src={logo} alt="My Icon" />
      </div>
    </div>
  );
}

export default App;
