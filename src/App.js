// File: src/App.js

import React from 'react';
import './App.css';
import './components/VerkadaPlayer/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';  
import RoleCard from './components/RoleCard/RoleCard';

const users = [{
  name: "Jasmine Lee",
  role: "Employee",
  avatar: "https://i.pravatar.cc/150?img=37"
},{
  name: "John Lee",
  role: "Admin",
  avatar: "https://i.pravatar.cc/150?img=35"
},{
  name: "Michelle Lee",
  role: "Visitor",
  avatar: "https://i.pravatar.cc/150?img=32"
}]


function App() {


  return (
    <div className="App">
      <RoleCard users={users}/>
    </div>
  );
}

export default App;