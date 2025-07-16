import React, { useRef, useEffect } from 'react';
import './AccessRoleManager.css';

const RoleDropdown = ({ user, isOpen, onToggle, onRoleChange }) => {
    const dropdownRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onToggle(null);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onToggle]);

    return (
        <div className="role-dropdown-container" ref={dropdownRef}>
            <button
                className="btn btn-sm dropdown-toggle"
                onClick={() => onToggle(user.id)}
                style={{ marginLeft: '8px' }}
            >
                ▶
            </button>
            {isOpen && (
                <div className="role-dropdown-menu">
                    <button
                        className="dropdown-item"
                        onClick={() => onRoleChange(user.id, 'Admin')}
                    >
                        Admin
                    </button>
                    <button
                        className="dropdown-item"
                        onClick={() => onRoleChange(user.id, 'Visitor')}
                    >
                        Visitor
                    </button>
                    <button
                        className="dropdown-item"
                        onClick={() => onRoleChange(user.id, 'Employee')}
                    >
                        Employee
                    </button>
                </div>
            )}
        </div>
    );
};

export default RoleDropdown; 