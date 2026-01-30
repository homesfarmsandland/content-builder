import React, { useState } from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const AppCard = ({ app, onClick }) => {
  const { isDarkMode } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    if (!app.disabled) {
      onClick(app)
    }
  }

  return (
    <div
      className={`p-4 rounded-lg border transition-all duration-200 ${
        app.disabled
          ? `cursor-not-allowed opacity-60 ${
              isDarkMode
                ? 'bg-neutral-800 text-white border-neutral-700'
                : 'bg-white text-gray-900 border-gray-200'
            }`
          : `cursor-pointer hover:scale-105 ${
              isDarkMode
                ? 'bg-neutral-800 text-white border-neutral-700 hover:shadow-lg hover:shadow-black/30'
                : 'bg-white text-gray-900 border-gray-200 hover:shadow-lg'
            }`
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-3xl mb-2 select-none">{app.icon}</div>
      <h3 className={`font-semibold text-sm mb-1 transition-opacity duration-300 select-none ${
        app.disabled && isHovered ? 'text-amber-400' : ''
      }`}>
        {app.disabled && isHovered ? 'Coming Soon' : app.title}
      </h3>
      <p className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {app.description}
      </p>
    </div>
  )
}

export default AppCard
