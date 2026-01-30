import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = ({ toolName = 'Internal Tool' }) => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`flex md:sticky bottom-0 left-0 right-0 py-4 border-t z-10 ${
      isDarkMode
        ? 'border-neutral-700 bg-neutral-900'
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <p className={`text-center text-sm ${
          isDarkMode ? 'text-neutral-400' : 'text-gray-600'
        }`}>
          {toolName} for {' '}
          <a
            href="https://homesfarmsandland.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`underline inline-flex items-center gap-1 ${isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-yellow-500 hover:text-yellow-400'}`}
          >
            homesfarmsandland.com
            <FiExternalLink className="w-3 h-3" />
          </a>
          <span className="hidden md:inline mx-2">•</span>
          <span className="md:hidden inline"><br></br></span>
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
