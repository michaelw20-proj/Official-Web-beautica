import React from 'react';
import { Sun, Moon, Settings } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';

const ThemeModeToggle = () => {
  const { mode, setMode } = useTheme();

  return (
    <div className="flex flex-col gap-3 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-lg shadow-lg">
      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        <Settings className="w-4 h-4" />
        Theme Mode
      </div>
      
      <ToggleGroup 
        type="single" 
        value={mode} 
        onValueChange={(value) => value && setMode(value as any)}
        className="grid grid-cols-2 gap-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-md"
      >
        <ToggleGroupItem 
          value="light" 
          className="flex flex-col items-center gap-1 p-3 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm dark:data-[state=on]:bg-gray-600 transition-all duration-200"
        >
          <Sun className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-medium">Light</span>
        </ToggleGroupItem>
        
        <ToggleGroupItem 
          value="dark" 
          className="flex flex-col items-center gap-1 p-3 rounded-md data-[state=on]:bg-white data-[state=on]:shadow-sm dark:data-[state=on]:bg-gray-600 transition-all duration-200"
        >
          <Moon className="w-4 h-4 text-blue-400" />
          <span className="text-xs font-medium">Dark</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ThemeModeToggle;
