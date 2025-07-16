import UserCard from './UserCard'
import './RoleCard.css'

export function getRoleColor(role) {
    if (!role) return ''
    if (role.toLowerCase() === 'admin') return 'blue'
    if (role.toLowerCase() === 'employee') return 'green'
    if (role.toLowerCase() === 'visitor') return 'gray'
    return ''
}

function RoleCard({ users }) {
    return (
        <div className='role-card'>
            {(!users || users.length === 0) ? <p className="card empty-state">No users to display.</p> :
                users.map((user, index) => (
                    <UserCard
                        key={index}
                        user={user}
                        getRoleColor={getRoleColor}
                    />))
            }
        </div>
    )
}

export default RoleCard 