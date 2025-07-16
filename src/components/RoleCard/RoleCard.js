import React from 'react'
import './RoleCard.css'
function RoleCard() {
    return (
        <div className='role-card'>
            <div className='card'>
                <div className='profile'>
                    <div className='profile-pic'>
                        <img src='./profilepix.jpg' alt='profile' />
                    </div>
                    <div className='user-info'>
                        <div className='name'>
                            <h3>John Doe</h3>
                        </div>
                        <div className='role'>
                            <p>Admin</p>
                        </div>
                    </div>
                </div>
                <div className="profile-dec">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className="btn btn-outline-secondary">
                    Edit Role
                </div>
            </div>
        </div>
    )
}

export default RoleCard 