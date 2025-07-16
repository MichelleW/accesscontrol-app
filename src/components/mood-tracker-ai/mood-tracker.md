# Mood Tracker Component

## Overview
The Mood Tracker is a React component that allows users to track their daily moods with optional notes. It provides a simple and intuitive interface for mood logging with persistent storage using localStorage.

## Features

### Core Functionality
- **Mood Selection**: Choose from 5 different mood levels (Excellent, Good, Neutral, Bad, Terrible)
- **Note Taking**: Add optional notes to each mood entry
- **Persistent Storage**: All mood data is saved to localStorage
- **Mood History**: View all previous mood entries with timestamps
- **Delete Entries**: Remove individual mood entries

### UI/UX Features
- **Visual Feedback**: Color-coded mood options with emojis
- **Responsive Design**: Works on desktop and mobile devices
- **Smooth Animations**: Hover effects and entry animations
- **Modern Styling**: Clean, card-based design with shadows and gradients

## Component Structure

### State Management
```javascript
const [moods, setMoods] = useState([]);           // Array of mood entries
const [currentMood, setCurrentMood] = useState(''); // Currently selected mood
const [note, setNote] = useState('');              // Current note text
```

### Mood Options
```javascript
const moodOptions = [
  { value: 'excellent', label: '😊 Excellent', color: '#4CAF50' },
  { value: 'good', label: '🙂 Good', color: '#8BC34A' },
  { value: 'neutral', label: '😐 Neutral', color: '#FFC107' },
  { value: 'bad', label: '😔 Bad', color: '#FF9800' },
  { value: 'terrible', label: '😢 Terrible', color: '#F44336' }
];
```

## Usage

### Basic Implementation
```javascript
import MoodTracker from './components/mood-tracker/mood-tracker';

function App() {
  return (
    <div className="App">
      <MoodTracker />
    </div>
  );
}
```

### Props
Currently, the component doesn't accept any props and is self-contained.

## Data Structure

### Mood Entry Object
```javascript
{
  id: 1234567890,                    // Unique timestamp-based ID
  mood: 'good',                      // Mood value (excellent, good, neutral, bad, terrible)
  note: 'Had a productive day!',     // Optional note text
  timestamp: '2024-01-15T10:30:00.000Z' // ISO timestamp
}
```

## Local Storage

The component automatically saves mood data to localStorage with the key `'moods'`. The data is:
- Loaded on component mount
- Updated whenever the moods array changes
- Stored as a JSON string

## Styling

### CSS Classes
- `.mood-tracker` - Main container
- `.mood-form` - Form section for adding new moods
- `.mood-options` - Container for mood selection buttons
- `.mood-option` - Individual mood selection button
- `.mood-history` - Section displaying mood history
- `.mood-item` - Individual mood entry card
- `.mood-info` - Container for mood label and timestamp
- `.delete-btn` - Delete button for mood entries

### Responsive Breakpoints
- **Desktop**: Full layout with horizontal mood options
- **Mobile (< 768px)**: Stacked layout with vertical mood options

## Future Enhancements

### Potential Features
- **Mood Analytics**: Charts and statistics for mood trends
- **Date Filtering**: Filter mood history by date ranges
- **Export Data**: Export mood data to CSV/JSON
- **Categories**: Add mood categories (work, personal, health, etc.)
- **Reminders**: Set up mood tracking reminders
- **Mood Streaks**: Track consecutive days of mood logging

### Technical Improvements
- **Backend Integration**: Connect to a database instead of localStorage
- **User Authentication**: Support multiple users
- **Data Validation**: Enhanced input validation
- **Accessibility**: Improve keyboard navigation and screen reader support
- **Testing**: Add unit and integration tests

## Dependencies
- React (hooks: useState, useEffect)
- No external dependencies required

## Browser Support
- Modern browsers with ES6+ support
- localStorage support required
- CSS Grid and Flexbox support recommended 