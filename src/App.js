// File: src/App.js

import React from 'react';
import './App.css';
import './components/VerkadaPlayer/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import VerkadaPlayer from './components/VerkadaPlayer/VerkadaPlayer';



function App() {


  return (
    <div className="App">
      <VerkadaPlayer />
    </div>
  );
}

export default App;