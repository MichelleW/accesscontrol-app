# Reusable Theme System

This directory contains reusable theme components that can be used across the entire application.

## Components

### ThemeSwitcher
A reusable theme switcher component with toggle functionality that can be positioned anywhere in the app.

**Features:**
- Toggle button with sun icon and current theme name
- Collapsible theme options panel
- Smooth animations
- Auto-close after theme selection
- Responsive design

**Usage:**
```jsx
import ThemeSwitcher from './components/shared/ThemeSwitcher';

// Fixed position (top-right corner) - default
<ThemeSwitcher position="fixed" />

// Relative position (inline)
<ThemeSwitcher position="relative" />

// Absolute position
<ThemeSwitcher position="absolute" />

// With custom className
<ThemeSwitcher position="fixed" className="custom-theme-switcher" />
```

**How it works:**
1. Click the toggle button to open/close the theme panel
2. Select a theme to apply it and auto-close the panel
3. Click the close button (X) to manually close the panel
4. The current theme name is always visible on the toggle button

### ThemeWrapper
A wrapper component that applies theme CSS variables to any component.

**Usage:**
```jsx
import ThemeWrapper from './components/shared/ThemeWrapper';

<ThemeWrapper className="my-component">
  <div>This content will have theme colors applied</div>
</ThemeWrapper>
```

## Context

### ThemeContext
Provides theme state and switching functionality to the entire app.

**Usage:**
```jsx
import { useTheme } from '../../contexts/ThemeContext';

const MyComponent = () => {
  const { theme, currentTheme, switchTheme } = useTheme();
  
  return (
    <div style={{ color: theme.colors.text }}>
      Current theme: {currentTheme}
    </div>
  );
};
```

## Setup

### 1. Wrap your app with ThemeProvider
```jsx
// App.js
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/shared/ThemeWrapper';

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper className="App">
        {/* Your app content */}
      </ThemeWrapper>
    </ThemeProvider>
  );
}
```

### 2. Use CSS variables in your components
```css
.my-component {
  background: var(--background);
  color: var(--text);
  border: 1px solid var(--border);
}

.my-button {
  background: var(--primary);
  color: white;
}
```

### 3. Add ThemeSwitcher where needed
```jsx
// In any component
import ThemeSwitcher from './components/shared/ThemeSwitcher';

<ThemeSwitcher position="fixed" />
```

## Available Themes

- **Light**: Default light theme
- **Dark**: Dark theme for low-light environments
- **Ocean**: Blue-tinted theme
- **Sunset**: Warm orange/red theme

## CSS Variables

The following CSS variables are available in all themed components:

- `--primary`: Primary brand color
- `--secondary`: Secondary brand color
- `--background`: Main background color
- `--surface`: Surface/card background color
- `--text`: Primary text color
- `--textSecondary`: Secondary text color
- `--border`: Border color
- `--success`: Success state color
- `--warning`: Warning state color
- `--error`: Error state color
- `--successLight`: Light success color
- `--warningLight`: Light warning color

## Adding New Themes

1. Add theme configuration to `src/themes/themes.js`:
```jsx
export const themes = {
  // ... existing themes
  newTheme: {
    name: 'New Theme',
    colors: {
      primary: '#your-color',
      // ... other colors
    }
  }
};
```

2. The theme will automatically appear in the ThemeSwitcher component.

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Wrap components** with ThemeWrapper when they need theming
3. **Test all themes** when developing new components
4. **Use semantic color names** like `--success` instead of `--green`
5. **Consider accessibility** - ensure sufficient contrast in all themes 