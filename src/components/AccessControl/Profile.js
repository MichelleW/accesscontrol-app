// File: src/components/Profile.js
import React, { useState } from 'react';


function Profile({ user }) {
  const [showRole, setShowRole] = useState(false);

  return (
    <div className="user-info"> 
      <img src={user.img} alt={user.name} className="user-avatar" />
      <div className="user-details">
        <h2>{user.name}</h2>
        <span className="user-role">{user.role}</span>
      </div>
    </div>
  );
}

export default Profile;