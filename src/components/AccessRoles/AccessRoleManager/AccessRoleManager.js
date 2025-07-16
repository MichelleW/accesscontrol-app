import React, { useState } from 'react';
import './AccessRoleManager.css';
import { mockUsers } from '../data/mockUsers';
import RoleDropdown from './RoleDropdown';

function AccessRoleManager() {
  const [users, setUsers] = useState(mockUsers);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  function getButtonClass(role) {
    role = role.toLowerCase();
    if (role === 'employee') return 'btn btn-success';
    if (role === 'visitor') return 'btn btn-info';
    if (role === 'admin') return 'btn btn-primary';
    return 'btn btn-secondary'; // fallback
  }

  const handleRoleChange = (userId, newRole) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
    setOpenDropdownId(null); // Close dropdown after selection
  };

  const toggleDropdown = (userId) => {
    setOpenDropdownId(openDropdownId === userId ? null : userId);
  };

  const displayUsers = () => {
    return users.map((user) => (
      <tr key={user.id}>
        <td className='name'>{user.name}</td>
        <td className='role'>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className={getButtonClass(user.role)}>{user.role}</div>
            <RoleDropdown
              user={user}
              isOpen={openDropdownId === user.id}
              onToggle={toggleDropdown}
              onRoleChange={handleRoleChange}
            />
          </div>
        </td>
      </tr>
    ));
  };

  const saveAllChanges = () => {
    let userStorage = localStorage.setItem('users', JSON.stringify(users));
    let getUserStorage = localStorage.getItem('users');
    console.log('getUserStorage', getUserStorage)

  };

  return (
    <div className="access-role-manager">
      <h1>Access Role Manager</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>
              Roles
            </th>
          </tr>
        </thead>
        <tbody>
          {displayUsers()}
        </tbody>
      </table>
      <div className='button-container'>
        <button className='btn btn-primary' onClick={saveAllChanges}>Save All Changes </button>
      </div>
    </div>
  );
}

export default AccessRoleManager;
