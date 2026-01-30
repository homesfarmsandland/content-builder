import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const AppCard = ({ app, onClick }) => {
  const { isDarkMode } = useTheme()

  return (
    <div
      className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:scale-105 ${
        isDarkMode 
          ? 'bg-neutral-800 text-white border-neutral-700 hover:shadow-lg hover:shadow-black/30' 
          : 'bg-white text-gray-900 border-gray-200 hover:shadow-lg'
      }`}
      onClick={() => onClick(app)}
    >
      <div className="text-3xl mb-2">{app.icon}</div>
      <h3 className="font-semibold text-sm mb-1">{app.title}</h3>
      <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {app.description}
      </p>
    </div>
  )
}

export default AppCard
