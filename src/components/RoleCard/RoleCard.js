import './RoleCard.css'
function RoleCard({ users }) {

    function getRoleColor(role) {
        if (!role) return ''
        if (role.toLowerCase() === 'admin') return 'blue'
        if (role.toLowerCase() === 'employee') return 'green'
        if (role.toLowerCase() === 'visitor') return 'gray'
        return ''
    }

    return (
        <div className='role-card'>
            {
                users.map((user, index) => (
                    <div key={user.id || index} className={`card ${getRoleColor(user.role)}`}>
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
                    </div>))
            }
        </div>
    )
}

export default RoleCard 