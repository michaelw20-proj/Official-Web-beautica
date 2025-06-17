import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'auto';
type Theme = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  theme: Theme;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  // Dark mode dari 18:00 sampai 06:00
  return (hour >= 18 || hour < 6) ? 'dark' : 'light';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode') as ThemeMode;
      return savedMode || 'auto';
    }
    return 'auto';
  });

  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('themeMode') as ThemeMode;
      if (savedMode === 'auto' || !savedMode) {
        return getTimeBasedTheme();
      }
      return savedMode as Theme;
    }
    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);

    if (mode === 'auto') {
      const updateTheme = () => {
        const newTheme = getTimeBasedTheme();
        setTheme(newTheme);
      };

      updateTheme();

      // Update theme setiap menit untuk check perubahan waktu
      const interval = setInterval(updateTheme, 60000);

      return () => clearInterval(interval);
    } else {
      setTheme(mode as Theme);
    }
  }, [mode]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const modes: ThemeMode[] = ['light', 'dark', 'auto'];
    const currentIndex = modes.indexOf(mode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setMode(modes[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// === Tambahan komponen gambar menyesuaikan tema ===
export const ThemedImage: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'; // ganti sesuai file kamu
  return <img {...props} src={src} alt={props.alt || 'Themed Image'} />;
};
