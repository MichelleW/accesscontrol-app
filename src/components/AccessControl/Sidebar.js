// File: src/components/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { USERS } from "./data.js";
import Profile from './Profile.js'
function Sidebar() {
    const [currentUser] = useState(USERS.employee);

    return (
        <nav className="sidebar">
            <header className="header">
                <Profile user={currentUser} />
            </header>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/access-log">Access Logs</Link></li>
                <li>Settings</li>
                <li>Help</li>
            </ul>
        </nav>
    );
}

export default Sidebar;