import React, { useState, useEffect } from 'react';
import './mood-tracker.css';

const MoodTracker = () => {
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
                    {moodOptions.map(mood => (
                        <button className="mood"
                            style={{ backgroundColor: mood.color }}
                            value={mood.value}
                        >{mood.label}
                        </button>
                    ))}
                </div>
                <div className="mood-actions">
                    <input className="note-input" type="text" placeholder="Add a note..." />
                    <button className="save-btn">Save</button>
                </div>
            </div> 
        </div>
    );
};

export default MoodTracker; 