import { useState } from 'react';
import './HabbitTable.css'

const habbitsData = [
    { id: 1, name: 'Exercise', completed: { mon: true, tue: true, wed: false, thu: false, fri: false, sat: false, sun: false } },
    { id: 2, name: 'Read', completed: { mon: true, tue: false, wed: true, thu: false, fri: false, sat: false, sun: false } },
    { id: 3, name: 'Meditate', completed: { mon: false, tue: true, wed: false, thu: false, fri: false, sat: false, sun: false } },
    { id: 4, name: 'New Habbit', completed: { mon: true, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false } }
];
const HabbitTable = () => {
    const [habits, setHabits] = useState(habbitsData);

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    // Helper function to toggle completion for a habit on a specific day
    const toggleCompletion = (habitId, dayKey) => {
        setHabits(prev =>
            prev.map(habit =>
                habit.id === habitId
                    ? {
                        ...habit,
                        completed: {
                            ...habit.completed,
                            [dayKey]: !habit.completed[dayKey]
                        }
                    }
                    : habit
            )
        );
    };

    const CheckBox = ({ isChecked, onClick }) => (
        <div
            className={`checkbox ${isChecked ? 'checked' : ''}`}
            onClick={onClick}
        >
            {isChecked && (
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
                    className="lucide lucide-check"
                >
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            )}
        </div>
    );

    return (
        <div className="habbit-table">
            <h1>Weekly Habbit Tracker</h1>
            <table>
                <thead>
                    <tr>
                        <th className="habbit-name-header">Habbit Name</th>
                        {days.map((day, index) => (
                            <th key={index} className="day-header">{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {habits.map((habit) => (
                        <tr key={habit.id} className="habbit-row">
                            <td className="habbit-name">{habit.name}</td>
                            {days.map((day, index) => {
                                const dayKey = day.toLowerCase().slice(0, 3);
                                const isCompleted = habit.completed[dayKey];
                                return (
                                    <td key={index} className="checkbox-cell">
                                        <CheckBox
                                            isChecked={isCompleted}
                                            onClick={() => toggleCompletion(habit.id, dayKey)} />
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HabbitTable; 