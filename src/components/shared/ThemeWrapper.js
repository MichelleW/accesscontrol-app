import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeWrapper = ({ children, className = '' }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`theme-wrapper ${className}`}
            style={{
                '--primary': theme.colors.primary,
                '--secondary': theme.colors.secondary,
                '--background': theme.colors.background,
                '--surface': theme.colors.surface,
                '--text': theme.colors.text,
                '--textSecondary': theme.colors.textSecondary,
                '--border': theme.colors.border,
                '--success': theme.colors.success,
                '--warning': theme.colors.warning,
                '--error': theme.colors.error,
                '--successLight': theme.colors.successLight,
                '--warningLight': theme.colors.warningLight,
            }}
        >
            {children}
        </div>
    );
};

export default ThemeWrapper; 