import React from 'react'
 
function UserCard({ user, getRoleColor }) {
    return (
        <div key={user.id} className={`card ${getRoleColor(user.role)}`}>
            <div className='profile'>
                <div className='profile-pic'>
                    <img src={user.avatar} alt='profile' />
                </div>
                <div className='user-info'>
                    <div className='name'>
                        <h3>{user.name}</h3>
                    </div>
                    <div className='role'>
                        <p>{user.role}</p>
                    </div>
                </div>
            </div>
            <div className="profile-dec">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
            <button className="btn btn-outline-info">
                Edit Role
            </button>
        </div>
    )
}

export default UserCard