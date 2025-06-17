import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const { theme, setTheme, currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(debouncedQuery.trim())}`);
    }
  }, [debouncedQuery, navigate]);

  const navItems = [
    { name: 'New Arrival', href: '/new-arrival' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Makeup', href: '/makeup' },
    { name: 'Nail Polish', href: '/nail-polish' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
  ];

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      case 'auto':
        return (
          <img 
            src="/Produk/Logo/Auto.png" 
            alt="Auto" 
            className="h-4 w-4 filter dark:invert dark:brightness-0 dark:contrast-100" 
          />
        );
      default:
        return <Sun className="h-4 w-4" />;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md shadow-md border-b border-white/10 dark:border-gray-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src="/Produk/Slideshow/Logo Brand.png"
                alt="Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-xs mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-white/20 dark:border-gray-700/20 rounded-full bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 bg-transparent hover:bg-white/40 dark:hover:bg-gray-800/40"
                >
                  {getThemeIcon()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end"
                className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-white/20 dark:border-gray-800/20"
              >
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('auto')}>
                  <img 
                    src="/Produk/Logo/Auto.png" 
                    alt="Auto" 
                    className="mr-2 h-4 w-4 filter dark:invert dark:brightness-0 dark:contrast-100" 
                  />
                  Auto
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-9 w-9 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 bg-transparent"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md rounded-lg mt-2 border border-white/10 dark:border-gray-800/10">
              <div className="relative mb-3">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-white/20 dark:border-gray-700/20 rounded-full bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
