import React from 'react'
import { appsConfig } from '../config/appsConfig'
import { useTheme } from '../contexts/ThemeContext'

const AppGrid = () => {
  const { isDarkMode } = useTheme()
  
  const handleAppClick = (app) => {
    console.log(`Navigating to ${app.title} at ${app.path}`)
    // In a real app, you would use React Router here
    // navigate(app.path)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {appsConfig.map((app) => (
        <div
          key={app.id}
          className={`app-card ${isDarkMode ? 'bg-neutral-800 text-white' : 'bg-white text-gray-900'} p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${isDarkMode ? 'border-neutral-700 hover:shadow-lg hover:shadow-black/30' : 'border-gray-200 hover:shadow-lg'}`}
          onClick={() => handleAppClick(app)}
        >
          <div className="app-icon text-3xl mb-2">{app.icon}</div>
          <h3 className="app-title font-semibold text-sm mb-1">{app.title}</h3>
          <p className={`app-description text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{app.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AppGrid
