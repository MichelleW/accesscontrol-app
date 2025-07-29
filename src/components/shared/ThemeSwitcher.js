import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { themes } from '../../themes/themes';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ position = 'fixed', className = '' }) => {
    const { currentTheme, switchTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleThemeSwitcher = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`theme-switcher ${position} ${className}`}>
            {/* Toggle Button */}
            <button
                className="theme-toggle-btn"
                onClick={toggleThemeSwitcher}
                title="Toggle Theme Switcher"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                <span className="current-theme-name">{themes[currentTheme].name}</span>
            </button>

            {/* Theme Options Panel */}
            {isOpen && (
                <div className="theme-panel">
                    <div className="theme-switcher-header">
                        <h3>Theme</h3>
                        <button
                            className="close-btn"
                            onClick={toggleThemeSwitcher}
                            title="Close Theme Switcher"
                        >
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
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                    <div className="theme-options">
                        {Object.entries(themes).map(([key, theme]) => (
                            <button
                                key={key}
                                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                                onClick={() => {
                                    switchTheme(key);
                                    setIsOpen(false); // Close panel after selection
                                }}
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
            )}
        </div>
    );
};

export default ThemeSwitcher; 