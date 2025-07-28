import NewHabit from '../NewHabit/NewHabit';

const HabitTracker = () => {
  return (
    <div className='habit-tracker-container'>
        <h2>Habit Tracker</h2>
        <table className="habit-table">
          <thead>
            <tr>
              <th>Habit</th>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Exercise</td>
              <td><NewHabit /></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Read</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Meditate</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="main-content"></div>
    </div>
  )
}

export default HabitTracker