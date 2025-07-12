// File: src/App.js

import React from 'react';
import './App.css';
import './components/VerkadaPlayer/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import AccessRoleManager from './components/AccessRoles/AccessRoleManager/AccessRoleManager';



function App() {


  return (
    <div className="App">
      <AccessRoleManager/>
    </div>
  );
}

export default App;