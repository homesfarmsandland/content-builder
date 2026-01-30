import React from 'react'
import { useTheme } from '../contexts/ThemeContext'
import AppGrid from './AppGrid'

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <div className={`home-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="home-header gap-3">
        <div>
          <h1 className="text-3xl font-bold text-neutral-200 mb-2">Content Builder</h1>
          <p className="text-neutral-400">Manage your generated property pages</p>
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
