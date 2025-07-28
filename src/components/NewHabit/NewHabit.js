import './NewHabit.css'

const NewHabit = ({ habit }) => { 
    const checkBox = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check checkbox"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )


    const displayWeekDays = () => {
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekDays.map((day, idx) => {
            const firstChar = day.charAt(0);
            return (
                <div className='card' key={idx}>{checkBox()}</div>
            )
        })
    }
    return (
        <div className='new-habit card'>
            <h2>Walk 10 Mintues</h2>
            <div className='weekdays'>
                {displayWeekDays()}
            </div>
        </div>
    )
}

export default NewHabit 