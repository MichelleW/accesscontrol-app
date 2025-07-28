import NewHabbit from '../NewHabbit/NewHabbit';

const HabbitTracker = () => {
    return (
        <div className='habbit-tracker-container'>
            <h2>Habbit Tracker</h2>
            <table className="habbit-table">
                <thead>
                    <tr>
                        <th>Habbit</th>
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
                        <td><NewHabbit /></td>
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

export default HabbitTracker