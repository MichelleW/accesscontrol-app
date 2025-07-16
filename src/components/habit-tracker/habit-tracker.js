import React, { useState, useEffect } from 'react';
import './habit-tracker.css';

const HabitTracker = () => {
    const [habits, setHabits] = useState([]);
    const [newHabit, setNewHabit] = useState('');
    const [selectedFrequency, setSelectedFrequency] = useState('daily');
    const [selectedCategory, setSelectedCategory] = useState('health');

    const frequencyOptions = [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'monthly', label: 'Monthly' }
    ];

    const categoryOptions = [
        { value: 'health', label: 'Health', color: '#4CAF50' },
        { value: 'productivity', label: 'Productivity', color: '#2196F3' },
        { value: 'learning', label: 'Learning', color: '#9C27B0' },
        { value: 'social', label: 'Social', color: '#FF9800' },
        { value: 'finance', label: 'Finance', color: '#F44336' },
        { value: 'other', label: 'Other', color: '#607D8B' }
    ];

    useEffect(() => {
        // Load habits from localStorage on component mount
        const savedHabits = localStorage.getItem('habits');
        if (savedHabits) {
            setHabits(JSON.parse(savedHabits));
        }
    }, []);

    useEffect(() => {
        // Save habits to localStorage whenever habits change
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    const handleAddHabit = (e) => {
        e.preventDefault();
        if (!newHabit.trim()) return;

        const habit = {
            id: Date.now(),
            name: newHabit.trim(),
            frequency: selectedFrequency,
            category: selectedCategory,
            createdAt: new Date().toISOString(),
            completions: [],
            streak: 0,
            totalCompletions: 0
        };

        setHabits([...habits, habit]);
        setNewHabit('');
    };

    const toggleHabitCompletion = (habitId) => {
        const today = new Date().toDateString();

        setHabits(habits.map(habit => {
            if (habit.id === habitId) {
                const isCompletedToday = habit.completions.includes(today);
                let newCompletions, newStreak, newTotal;

                if (isCompletedToday) {
                    // Remove completion
                    newCompletions = habit.completions.filter(date => date !== today);
                    newTotal = habit.totalCompletions - 1;
                    // Recalculate streak
                    newStreak = calculateStreak(newCompletions, habit.frequency);
                } else {
                    // Add completion
                    newCompletions = [...habit.completions, today];
                    newTotal = habit.totalCompletions + 1;
                    // Recalculate streak
                    newStreak = calculateStreak(newCompletions, habit.frequency);
                }

                return {
                    ...habit,
                    completions: newCompletions,
                    streak: newStreak,
                    totalCompletions: newTotal
                };
            }
            return habit;
        }));
    };

    const calculateStreak = (completions, frequency) => {
        if (completions.length === 0) return 0;

        const sortedDates = completions
            .map(date => new Date(date))
            .sort((a, b) => b - a); // Sort descending

        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let i = 0; i < sortedDates.length; i++) {
            const currentDate = sortedDates[i];
            currentDate.setHours(0, 0, 0, 0);

            if (i === 0) {
                // Check if the most recent completion is today or yesterday
                const diffDays = Math.floor((today - currentDate) / (1000 * 60 * 60 * 24));
                if (diffDays <= 1) {
                    streak = 1;
                } else {
                    break;
                }
            } else {
                // Check if consecutive based on frequency
                const prevDate = sortedDates[i - 1];
                const diffDays = Math.floor((prevDate - currentDate) / (1000 * 60 * 60 * 24));

                if (frequency === 'daily' && diffDays === 1) {
                    streak++;
                } else if (frequency === 'weekly' && diffDays <= 7) {
                    streak++;
                } else if (frequency === 'monthly' && diffDays <= 31) {
                    streak++;
                } else {
                    break;
                }
            }
        }

        return streak;
    };

    const deleteHabit = (habitId) => {
        setHabits(habits.filter(habit => habit.id !== habitId));
    };

    const isCompletedToday = (habit) => {
        const today = new Date().toDateString();
        return habit.completions.includes(today);
    };

    const getCategoryColor = (categoryValue) => {
        const category = categoryOptions.find(option => option.value === categoryValue);
        return category ? category.color : '#607D8B';
    };

    const getCategoryLabel = (categoryValue) => {
        const category = categoryOptions.find(option => option.value === categoryValue);
        return category ? category.label : 'Other';
    };

    const getFrequencyLabel = (frequencyValue) => {
        const frequency = frequencyOptions.find(option => option.value === frequencyValue);
        return frequency ? frequency.label : frequencyValue;
    };

    return (
        <div className="habit-tracker">
            <h2>Habit Tracker</h2>

            <form onSubmit={handleAddHabit} className="habit-form">
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Enter a new habit..."
                        value={newHabit}
                        onChange={(e) => setNewHabit(e.target.value)}
                        className="habit-input"
                        autoComplete="off"
                    />

                    <select
                        value={selectedFrequency}
                        onChange={(e) => setSelectedFrequency(e.target.value)}
                        className="frequency-select"
                    >
                        {frequencyOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="category-select"
                    >
                        {categoryOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="add-habit-btn"
                    disabled={!newHabit.trim()}
                >
                    Add Habit
                </button>
            </form>

            <div className="habits-list">
                <h3>Your Habits</h3>
                {habits.length === 0 ? (
                    <p className="no-habits">No habits yet. Start by adding your first habit above!</p>
                ) : (
                    <div className="habits-grid">
                        {habits.map(habit => (
                            <div key={habit.id} className="habit-card">
                                <div className="habit-header">
                                    <span
                                        className="category-badge"
                                        style={{ backgroundColor: getCategoryColor(habit.category) }}
                                    >
                                        {getCategoryLabel(habit.category)}
                                    </span>
                                    <button
                                        className="delete-habit-btn"
                                        onClick={() => deleteHabit(habit.id)}
                                    >
                                        ×
                                    </button>
                                </div>

                                <h4 className="habit-name">{habit.name}</h4>

                                <div className="habit-meta">
                                    <span className="frequency-badge">
                                        {getFrequencyLabel(habit.frequency)}
                                    </span>
                                    <span className="streak-badge">
                                        🔥 {habit.streak} day streak
                                    </span>
                                </div>

                                <div className="habit-stats">
                                    <div className="stat">
                                        <span className="stat-label">Total</span>
                                        <span className="stat-value">{habit.totalCompletions}</span>
                                    </div>
                                    <div className="stat">
                                        <span className="stat-label">This Week</span>
                                        <span className="stat-value">
                                            {habit.completions.filter(date => {
                                                const completionDate = new Date(date);
                                                const weekAgo = new Date();
                                                weekAgo.setDate(weekAgo.getDate() - 7);
                                                return completionDate >= weekAgo;
                                            }).length}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className={`complete-btn ${isCompletedToday(habit) ? 'completed' : ''}`}
                                    onClick={() => toggleHabitCompletion(habit.id)}
                                >
                                    {isCompletedToday(habit) ? '✓ Completed Today' : 'Mark Complete'}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default HabitTracker; 