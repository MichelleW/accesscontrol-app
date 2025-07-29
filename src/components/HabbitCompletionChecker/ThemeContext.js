import React, { createContext, useContext, useState } from 'react';
import { themes } from './themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('habbit-theme');
        return savedTheme || 'light';
    });

    const theme = themes[currentTheme];

    const switchTheme = (themeName) => {
        setCurrentTheme(themeName);
        localStorage.setItem('habbit-theme', themeName);
    };

    return (
        <ThemeContext.Provider value={{ theme, currentTheme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 