import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar'

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Dashboard/>
      </div>
    </Router>  
  );
}

export default App;
