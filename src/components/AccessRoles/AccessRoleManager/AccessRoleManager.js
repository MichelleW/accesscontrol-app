import React, { useState } from 'react';
import './AccessRoleManager.css';



function AccessRoleManager() {
  const USERS = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "Visitor" },
    { id: 3, name: "Carol", role: "Employee" },
  ];

  function getButtonClass(role) {
    role = role.toLowerCase();
    if (role === 'employee') return 'btn btn-success';
    if (role === 'visitor') return 'btn btn-info';
    if (role === 'admin') return 'btn btn-primary';
    return 'btn btn-secondary'; // fallback
  }

  const displayUsers = () => {
    return USERS.map((user) => (
      <tr key={user.id}>
        <td className='name' >{user.name}</td>
        <td className='role'><div className={getButtonClass(user.role)}>{user.role}</div></td>
      </tr>
    ));
  };

  const saveAllChanges = () => {
    console.log('saveAllChanges');
  };

  return (
    <div className="access-role-manager">
      <h1>Access Role Manager</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Roles
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Admin</a></li>
                  <li><a className="dropdown-item" href="#">Visitor</a></li>
                  <li><a className="dropdown-item" href="#">Employee</a></li>
                </ul>
              </div></th>
          </tr>
          {displayUsers()}
          <tr>
            <td className='name'>First Employee</td>
            <td className='role'><div className="btn btn-warning">Admin</div></td>
          </tr>
        </thead>
      </table>
      <div className='button-container'>
        <button className='btn btn-primary' onClick={saveAllChanges}>Save All Changes </button>
      </div>
    </div>
  );
}

export default AccessRoleManager;
