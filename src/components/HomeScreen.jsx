import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import AppGrid from './AppGrid'

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`home-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="home-header gap-3">
        <h1 className="home-title">Content Builder</h1>
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
