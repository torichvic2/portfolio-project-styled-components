// hooks/useThemeMode.ts
import { useState } from 'react';
import type { ThemeMode } from '../Theme.ts';

export const useThemeMode = () => {
    const [mode, setMode] = useState<ThemeMode>('light');

    const toggleMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return { mode, toggleMode };
};