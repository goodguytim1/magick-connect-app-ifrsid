
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTheme, setTheme as saveTheme } from '@/utils/storage';
import { colors } from '@/styles/commonStyles';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentColors: typeof colors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme = await getTheme();
    setTheme(savedTheme);
  }

  async function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    await saveTheme(newTheme);
  }

  const currentColors = theme === 'dark' ? {
    background: colors.background,
    card: colors.card,
    text: colors.text,
    textSecondary: colors.textSecondary,
    primary: colors.primary,
    secondary: colors.secondary,
    accent: colors.accent,
    highlight: colors.highlight,
  } : {
    background: colors.backgroundLight,
    card: colors.cardLight,
    text: colors.textLight,
    textSecondary: colors.textSecondaryLight,
    primary: colors.primaryLight,
    secondary: colors.secondary,
    accent: colors.accentLight,
    highlight: colors.highlight,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentColors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
}
