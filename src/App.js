// File: src/App.js
import React, { useState } from 'react';
import './App.css';
import './components/AccessControl/AccessControl.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Sidebar from './components/AccessControl/Sidebar'
import Profile from './components/AccessControl/Profile';
import VideoGallery from './components/AccessControl/VideoGallery';
import AccessLog from './components/AccessControl/AccessLog';
import { USERS } from './components/AccessControl/data.js';

function App() {
  const [currentUser] = useState(USERS.employee);

  return (
    <Router>
      <div className="dashboard">
        <Sidebar />
        <main className="main-content">
          {/* <header className="header">
            <Profile user={currentUser} />
          </header> */}
          <Routes>
            <Route path="/" element={<VideoGallery />} />
            <Route path="/access-log" element={<AccessLog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;