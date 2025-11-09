import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/' element = {<Login/>}/>
          <Route path='/Register' element = {<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
/* Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Remotesigned */