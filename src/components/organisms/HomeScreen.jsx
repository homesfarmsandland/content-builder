import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'
import AppGrid from '../molecules/AppGrid'

const HomeScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div className={`home-screen ${isDarkMode ? 'dark' : 'light'}`}>
      <header className={`home-header flex justify-between items-start gap-3 m-4 ${isDarkMode ? 'bg-none' : 'bg-none'}`}>
        <div>
          <h1 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>Content Builder</h1>
          <p className={isDarkMode ? 'text-neutral-400' : 'text-gray-600'}>Manage content across <i>homesfarmsandland.com</i></p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleLogout}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              isDarkMode
                ? 'bg-red-400 text-red-800 hover:bg-red-500'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            Log Out
          </button>
          <button
            onClick={toggleTheme}
            className={`theme-toggle-btn w-10 h-10 rounded-full cursor-pointer font-mono flex items-center justify-center ${isDarkMode ? 'bg-neutral-700' : 'bg-neutral-200'}`}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </header>

      <main className="home-content">
        <AppGrid />
      </main>
    </div>
  )
}

export default HomeScreen
