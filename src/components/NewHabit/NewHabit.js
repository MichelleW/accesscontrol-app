import './NewHabit.css'

const NewHabit = () => {

    const displayWeekDays = () => {
        const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return weekDays.map((day, idx) => {
            const firstChar = day.charAt(0);
            return (
                <div className='card' key={idx}>{firstChar}</div>
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