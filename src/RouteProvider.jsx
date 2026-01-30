import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { HomeScreen } from './components'
import Access from './components/Access'

const RouteProvider = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <HomeScreen /> : <Access />
}

export default RouteProvider
