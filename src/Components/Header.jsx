import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const DynamicHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState('User');
  const [userType, setUserType] = useState('visitor');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Get current path from browser URL
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Get actual browser URL path
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // Extract user type from URL path
    let storageKey = 'VName'; // default
    let detectedUserType = 'visitor';

    if (path.includes('hospitalhome')) {
      storageKey = 'HName';
      detectedUserType = 'hospital';
    } else if (path.includes('visitorhome')) {
      storageKey = 'VName';
      detectedUserType = 'visitor';
    }

    setUserType(detectedUserType);

    // Get name from localStorage based on detected user type
    const storedName = localStorage.getItem(storageKey);
    if (storedName) {
      setName(storedName);
      setIsLoggedIn(true);
    } else {
      // Set default name
      setName('User');
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    const storageKey = userType === 'hospital' ? 'HName' : 'VName';
    localStorage.removeItem(storageKey);
    
    // Navigate to home page
    window.location.href = '/';
  };

  // Demo function to simulate navigation
  const simulateNavigation = (path) => {
    setCurrentPath(path);
    setIsMenuOpen(false);
  };

  const getHeaderTitle = () => {
    if (userType === 'hospital') {
      return {
        title: "Hospital Dashboard",
        subtitle: "Manage hospital information and availability"
      };
    }
    return {
      title: "Hospital Finder",
      subtitle: "Find hospitals and check availability"
    };
  };

  const headerInfo = getHeaderTitle();

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group">
                <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold mr-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CareSync
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-blue-50 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{name}</span>
                  <span>👤</span>
                </button>
                {dropdownOpen && isLoggedIn && (
                  <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg min-w-32 border">
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left rounded-lg transition-colors duration-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile User Profile */}
              <div className="relative">
                <button
                  className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>{name}</span>
                  <span>👤</span>
                </button>
                {dropdownOpen && isLoggedIn && (
                  <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg min-w-32 border z-10">
                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left rounded-lg transition-colors duration-200"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t`}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-50 transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      

      
    </div>
  );
};

export default DynamicHeader;