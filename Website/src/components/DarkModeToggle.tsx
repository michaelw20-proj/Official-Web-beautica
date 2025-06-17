import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const DarkModeToggle = () => {
  const { mode, theme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (mode === 'auto') {
      return (
        <div className="relative w-5 h-5">
          <div className="absolute inset-0 w-5 h-5 text-purple-500 transition-all duration-300 opacity-100 rotate-0 scale-100">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="m4.22 4.22 4.24 4.24m7.07 7.07 4.24 4.24" />
              <path d="M1 12h6m6 0h6" />
              <path d="m4.22 19.78 4.24-4.24m7.07-7.07 4.24-4.24" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 rotate-90 scale-75'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 text-blue-400 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 rotate-0 scale-100' 
              : 'opacity-0 -rotate-90 scale-75'
          }`} 
        />
      </div>
    );
  };

  const getModeText = () => {
    switch (mode) {
      case 'light': return 'Light';
      case 'dark': return 'Dark';
      case 'auto': return 'Auto';
      default: return '';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label={`Toggle theme mode (currently ${getModeText()})`}
      title={`${getModeText()} mode${mode === 'auto' ? ` (currently ${theme})` : ''}`}
    >
      {getIcon()}
      
      {/* Mode indicator */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 px-1.5 py-0.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {getModeText()}
      </div>

      {/* Elegant hover effect */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        mode === 'auto' 
          ? 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20'
          : 'bg-gradient-to-r from-amber-400/20 to-blue-400/20'
      }`} />
    </button>
  );
};

export default DarkModeToggle;
