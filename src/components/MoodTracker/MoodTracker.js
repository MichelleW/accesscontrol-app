import { useState, useEffect } from 'react';
import './MoodTracker.css';
import DeleteBtn from '../DeleteBtn/DeleteBtn'; 
const defaultMood = [
    {
        "mood": "good",
        "note": "adfd"
    },
    {
        "mood": "terrible",
        "note": "bdfd"
    },
    {
        "mood": "neutral",
        "note": "cdfd"
    },
    {
        "mood": "terrible",
        "note": "ddfad"
    },
    {
        "mood": "good",
        "note": "edfad"
    }
]
const MoodTracker = () => {
    const [mood, setMood] = useState({});
    const [moodHistory, setMoodHistory] = useState(defaultMood);
    const [selectedMood, setSelectedMood] = useState('');

    function handleMoodChange(e) {
        const { value, name } = e.target;

        if (name === 'mood') {
            setSelectedMood(prev => prev === value ? '' : value);
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
        setMoodHistory(prev => {
            return [...prev, mood];
        });
        document.querySelector('.note-input').value = "";
    }
    const moodOptions = [
        { value: 'excellent', label: '😊', color: '#4CAF50' },
        { value: 'good', label: '🙂', color: '#8BC34A' },
        { value: 'neutral', label: '😐', color: '#FFC107' },
        { value: 'bad', label: '😔', color: '#FF9800' },
        { value: 'terrible', label: '😢', color: '#F44336' }
    ];
    const updateMoodState = (moodToDelete) => {
        setMoodHistory(prev => {
            return prev.filter(m => !(m.mood === moodToDelete.mood && m.note === moodToDelete.note));
        });
    }
    useEffect(() => {
        localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
    }, [moodHistory]);


    return (
        <div className="mood-tracker">
            <div className="mood-card">
                <div className="card">
                    <h2>How are you feeling today?</h2>
                    <div className="mood-emojis">
                        {moodOptions.map((mood, idx) => (
                            <button
                                className={`mood ${selectedMood === mood.value ? 'active' : ''}`}
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
            {(moodHistory.length > 0) ? (

                <div className="mood-history">

                    {moodHistory.map((mood, idx) => (
                        <div className="card" key={idx}
                            style={{ backgroundColor: moodOptions.find(option => option.value === mood.mood)?.color }}
                        >
                            <DeleteBtn
                                item={mood}
                                onDelete={updateMoodState}
                                showConfirmation={true}
                                confirmationMessage="Are you sure you want to delete this mood entry?"
                            />
                            <h4>Current mood: {moodOptions.find(option => option.value === mood.mood)?.label}</h4>
                            <p><b>Note:</b> {mood.note}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="card">
                    <h2>Have a good day!</h2>
                </div>
            )}
        </div>
    );
};

export default MoodTracker; 