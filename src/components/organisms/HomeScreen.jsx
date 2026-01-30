import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import AppGrid from '../molecules/AppGrid'

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`home-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <header className={`home-header gap-3 m-4 ${isDarkMode ? 'bg-none' : 'bg-none'}`}>
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-neutral-200' : 'text-gray-900'}`}>Content Builder</h1>
          <p className={isDarkMode ? 'text-neutral-400' : 'text-gray-600'}>Manage content across <i>homesfarmsandland.com</i></p>
        </div>
        <button
          onClick={toggleTheme}
          className="theme-toggle-btn"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>
      </header>

      <main className="home-content">
        <AppGrid />
      </main>
    </div>
  )
}

export default HomeScreen
