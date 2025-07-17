import React, { useState, useEffect } from 'react';
import './mood-tracker.css';

const MoodTracker = () => {
    const [mood, setMood] = useState({ mood: '', note: '' });
 
    function handleMoodChange(e) {
        const { value, name } = e.target;

        if (name === 'mood') {
            setMood(prev => {
                let note = prev.note || "";
                return { mood: value, note };
            });

        } else if (name === 'note') {
            setMood(prev => {
                let mood = prev.mood || "";
                return { mood, note: value };
            })
        }

    }

    function handleSaveMood() {
        document.querySelector('.note-input').value = '';
        setMood({ mood: '', note: '' })
    }
    const moodOptions = [
        { value: 'excellent', label: '😊', color: '#4CAF50' },
        { value: 'good', label: '🙂', color: '#8BC34A' },
        { value: 'neutral', label: '😐', color: '#FFC107' },
        { value: 'bad', label: '😔', color: '#FF9800' },
        { value: 'terrible', label: '😢', color: '#F44336' }
    ];

    return (
        <div className="mood-tracker">
            <div className="card">
                <h2>How are you feeling today?</h2>
                <div className="mood-emojis">
                    {moodOptions.map((mood, idx) => (
                        <button
                            className={`mood ${mood.value === mood.mood ? 'active' : ''}`}
                            name="mood"
                            key={idx}
                            style={{ backgroundColor: mood.color }}
                            value={mood.value}
                            onClick={handleMoodChange}
                        >
                            {mood.label}
                        </button>
                    ))}
                </div>
                <div className="mood-actions">
                    <input className="note-input"
                        type="text"
                        placeholder="Add a note..."
                        name="note"
                        onChange={handleMoodChange} />
                    <button className="save-btn" onClick={handleSaveMood}   >Save</button>
                </div>
            </div>
        </div>
    );
};

export default MoodTracker; 