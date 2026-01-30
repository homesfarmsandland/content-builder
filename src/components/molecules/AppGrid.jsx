import React from 'react'
import { appsConfig } from '../../config/appsConfig'
import AppCard from '../atoms/AppCard'

const AppGrid = () => {
  const handleAppClick = (app) => {
    console.log(`Navigating to ${app.title} at ${app.path}`)
    // In a real app, you would use React Router here
    // navigate(app.path)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {appsConfig.map((app) => (
        <AppCard
          key={app.id}
          app={app}
          onClick={handleAppClick}
        />
      ))}
    </div>
  )
}

export default AppGrid
