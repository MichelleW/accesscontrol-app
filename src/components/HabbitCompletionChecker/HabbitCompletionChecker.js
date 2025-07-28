import React, { useState, useEffect, useCallback } from 'react';
import './HabbitCompletionChecker.css';

// Sample data - in a real app, this would come from localStorage or API
const sampleHabits = [
    {
        id: 1,
        name: 'Exercise',
        category: 'Health',
        frequency: 'daily',
        completed: {
            mon: true, tue: true, wed: false, thu: true, fri: false, sat: true, sun: false
        },
        streak: 3,
        totalCompletions: 15,
        createdAt: '2024-01-01'
    },
    {
        id: 2,
        name: 'Read',
        category: 'Learning',
        frequency: 'daily',
        completed: {
            mon: true, tue: false, wed: true, thu: false, fri: true, sat: false, sun: true
        },
        streak: 2,
        totalCompletions: 12,
        createdAt: '2024-01-01'
    },
    {
        id: 3,
        name: 'Meditate',
        category: 'Wellness',
        frequency: 'daily',
        completed: {
            mon: false, tue: true, wed: true, thu: true, fri: false, sat: true, sun: false
        },
        streak: 4,
        totalCompletions: 18,
        createdAt: '2024-01-01'
    }
];

const HabbitCompletionChecker = () => {
    const [habits, setHabits] = useState(sampleHabits);
    const [completionStats, setCompletionStats] = useState([]);

    // Calculate completion stats function
    const calculateCompletionStats = useCallback(() => {
        const stats = habits.map(habit => {
            const completedDays = Object.values(habit.completed).filter(Boolean).length;
            const totalDays = Object.keys(habit.completed).length;
            const completionRate = Math.round((completedDays / totalDays) * 100);

            return {
                id: habit.id,
                name: habit.name,
                completionRate,
                completedDays,
                totalDays,
                streak: habit.streak,
                totalCompletions: habit.totalCompletions
            };
        });

        setCompletionStats(stats);
    }, [habits]);

    // Load habits from localStorage on mount
    useEffect(() => {
        const savedHabits = localStorage.getItem('habbits');
        if (savedHabits) {
            setHabits(JSON.parse(savedHabits));
        }
    }, []);

    // Save habits and calculate stats when habits change
    useEffect(() => {
        localStorage.setItem('habbits', JSON.stringify(habits));
        calculateCompletionStats();
    }, [habits, calculateCompletionStats]);

    function toggleCompletion(habitId, dayKey) {
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
    }

    function getCompletionColor(rate) {
        if (rate >= 80) return '#4CAF50';
        if (rate >= 60) return '#8BC34A';
        if (rate >= 40) return '#FFC107';
        if (rate >= 20) return '#FF9800';
        return '#F44336';
    }

    function getStreakEmoji(streak) {
        if (streak >= 7) return '🔥';
        if (streak >= 5) return '⚡';
        if (streak >= 3) return '💪';
        if (streak >= 1) return '👍';
        return '😴';
    }

    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    return (
        <div className="habbit-completion-checker">
            <div className="checker-header">
                <h1>Habbit Completion Checker</h1>
                <p>Track your progress and completion rates</p>
            </div>

            {/* Completion Statistics Dashboard */}
            <div className="stats-dashboard">
                <h2>Completion Statistics</h2>
                <div className="stats-grid">
                    {completionStats.map(stat => (
                        <div key={stat.id} className="stat-card">
                            <div className="stat-header">
                                <h3>{stat.name}</h3>
                                <span className="streak-badge">
                                    {getStreakEmoji(stat.streak)} {stat.streak} day streak
                                </span>
                            </div>
                            <div className="completion-bar">
                                <div
                                    className="completion-fill"
                                    style={{
                                        width: `${stat.completionRate}%`,
                                        backgroundColor: getCompletionColor(stat.completionRate)
                                    }}
                                ></div>
                            </div>
                            <div className="stat-details">
                                <span>{stat.completionRate}% complete</span>
                                <span>{stat.completedDays}/{stat.totalDays} days</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Weekly Completion Table */}
            <div className="completion-table-section">
                <h2>Weekly Completion Tracker</h2>
                <div className="table-container">
                    <table className="completion-table">
                        <thead>
                            <tr>
                                <th className="habit-name-header">Habbit Name</th>
                                {days.map((day, index) => (
                                    <th key={index} className="day-header">{day}</th>
                                ))}
                                <th className="completion-header">Completion Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {habits.map((habit) => {
                                const completedDays = Object.values(habit.completed).filter(Boolean).length;
                                const totalDays = Object.keys(habit.completed).length;
                                const completionRate = Math.round((completedDays / totalDays) * 100);

                                return (
                                    <tr key={habit.id} className="habit-row">
                                        <td className="habit-name">
                                            <div className="habit-info">
                                                <span className="habit-title">{habit.name}</span>
                                                <span className="habit-category">{habit.category}</span>
                                            </div>
                                        </td>
                                        {days.map((day, index) => {
                                            const dayKey = day.toLowerCase().slice(0, 3);
                                            const isCompleted = habit.completed[dayKey];
                                            return (
                                                <td key={index} className="checkbox-cell">
                                                    <div
                                                        className={`completion-checkbox ${isCompleted ? 'completed' : ''}`}
                                                        onClick={() => toggleCompletion(habit.id, dayKey)}
                                                    >
                                                        {isCompleted && (
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
                                                            >
                                                                <path d="M20 6 9 17l-5-5" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                </td>
                                            );
                                        })}
                                        <td className="completion-rate">
                                            <div className="rate-display">
                                                <span className="rate-percentage">{completionRate}%</span>
                                                <div className="mini-progress">
                                                    <div
                                                        className="mini-fill"
                                                        style={{
                                                            width: `${completionRate}%`,
                                                            backgroundColor: getCompletionColor(completionRate)
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Habbit Insights */}
            <div className="insights-section">
                <h2>Habbit Insights</h2>
                <div className="insights-grid">
                    <div className="insight-card">
                        <h3>Best Performing Habbit</h3>
                        {completionStats.length > 0 && (
                            <div className="best-habit">
                                <span className="habit-name">
                                    {completionStats.reduce((best, current) =>
                                        current.completionRate > best.completionRate ? current : best
                                    ).name}
                                </span>
                                <span className="completion-rate">
                                    {completionStats.reduce((best, current) =>
                                        current.completionRate > best.completionRate ? current : best
                                    ).completionRate}%
                                </span>
                            </div>
                        )}
                    </div>

                    <div className="insight-card">
                        <h3>Total Completions This Week</h3>
                        <div className="total-completions">
                            <span className="completion-count">
                                {habits.reduce((total, habit) =>
                                    total + Object.values(habit.completed).filter(Boolean).length, 0
                                )}
                            </span>
                            <span className="completion-label">completions</span>
                        </div>
                    </div>

                    <div className="insight-card">
                        <h3>Average Completion Rate</h3>
                        <div className="average-rate">
                            <span className="rate-number">
                                {completionStats.length > 0
                                    ? Math.round(completionStats.reduce((sum, stat) => sum + stat.completionRate, 0) / completionStats.length)
                                    : 0
                                }%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HabbitCompletionChecker; 