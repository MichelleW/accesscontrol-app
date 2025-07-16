// File: src/App.js

import React from 'react';
import './App.css';
import './components/VerkadaPlayer/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import RoleCard from './components/RoleCard/RoleCard';



function App() {


  return (
    <div className="App">
      <RoleCard/>
    </div>
  );
}

export default App;