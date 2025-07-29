import React from 'react';
import { useTheme } from './ThemeContext';
import { themes } from './themes';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const { currentTheme, switchTheme } = useTheme();

    return (
        <div className="theme-switcher">
            <div className="theme-switcher-header">
                <h3>Theme</h3>
                <span className="current-theme">{themes[currentTheme].name}</span>
            </div>
            <div className="theme-options">
                {Object.entries(themes).map(([key, theme]) => (
                    <button
                        key={key}
                        className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                        onClick={() => switchTheme(key)}
                        style={{
                            backgroundColor: theme.colors.surface,
                            borderColor: theme.colors.border,
                            color: theme.colors.text
                        }}
                    >
                        <div className="theme-preview">
                            <div
                                className="preview-primary"
                                style={{ backgroundColor: theme.colors.primary }}
                            ></div>
                            <div
                                className="preview-secondary"
                                style={{ backgroundColor: theme.colors.secondary }}
                            ></div>
                        </div>
                        <span className="theme-name">{theme.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitcher; 