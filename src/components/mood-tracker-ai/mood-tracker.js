import React, { useState, useEffect } from 'react';
import './mood-tracker.css';

const MoodTracker = () => {
    const [moods, setMoods] = useState([]);
    const [currentMood, setCurrentMood] = useState('');
    const [note, setNote] = useState('');

    const moodOptions = [
        { value: 'excellent', label: '😊 Excellent', color: '#4CAF50' },
        { value: 'good', label: '🙂 Good', color: '#8BC34A' },
        { value: 'neutral', label: '😐 Neutral', color: '#FFC107' },
        { value: 'bad', label: '😔 Bad', color: '#FF9800' },
        { value: 'terrible', label: '😢 Terrible', color: '#F44336' }
    ];

    useEffect(() => {
        // Load moods from localStorage on component mount
        const savedMoods = localStorage.getItem('moods');
        if (savedMoods) {
            setMoods(JSON.parse(savedMoods));
        }
    }, []);

    useEffect(() => {
        // Save moods to localStorage whenever moods change
        localStorage.setItem('moods', JSON.stringify(moods));
    }, [moods]);

    const handleMoodSubmit = (e) => {
        e.preventDefault();
        if (!currentMood) return;

        const newMood = {
            id: Date.now(),
            mood: currentMood,
            note: note,
            timestamp: new Date().toISOString()
        };

        setMoods([newMood, ...moods]);
        setCurrentMood('');
        setNote('');
    };

    const deleteMood = (id) => {
        setMoods(moods.filter(mood => mood.id !== id));
    };

    const getMoodLabel = (moodValue) => {
        const mood = moodOptions.find(option => option.value === moodValue);
        return mood ? mood.label : moodValue;
    };

    const getMoodColor = (moodValue) => {
        const mood = moodOptions.find(option => option.value === moodValue);
        return mood ? mood.color : '#ccc';
    };

    return (
        <div className="mood-tracker">
            <h2>Mood Tracker</h2>

            <form onSubmit={handleMoodSubmit} className="mood-form">
                <div className="mood-options">
                    {moodOptions.map(option => (
                        <button
                            key={option.value}
                            type="button"
                            className={`mood-option ${currentMood === option.value ? 'selected' : ''}`}
                            style={{ borderColor: option.color }}
                            onClick={() => setCurrentMood(option.value)}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="note-input">
                    <textarea
                        placeholder="Add a note about your mood (optional)..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows="3"
                    />
                </div>

                <button
                    type="submit"
                    className="submit-btn"
                    disabled={!currentMood}
                >
                    Track Mood
                </button>
            </form>

            <div className="mood-history">
                <h3>Mood History</h3>
                {moods.length === 0 ? (
                    <p className="no-moods">No moods tracked yet. Start by selecting your current mood above!</p>
                ) : (
                    <div className="mood-list">
                        {moods.map(mood => (
                            <div key={mood.id} className="mood-item">
                                <div className="mood-info">
                                    <span
                                        className="mood-label"
                                        style={{ color: getMoodColor(mood.mood) }}
                                    >
                                        {getMoodLabel(mood.mood)}
                                    </span>
                                    <span className="mood-time">
                                        {new Date(mood.timestamp).toLocaleString()}
                                    </span>
                                </div>
                                {mood.note && (
                                    <p className="mood-note">{mood.note}</p>
                                )}
                                <button
                                    className="delete-btn"
                                    onClick={() => deleteMood(mood.id)}
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoodTracker; 