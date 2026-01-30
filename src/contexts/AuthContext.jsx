import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage for authentication state
    const authState = localStorage.getItem('isAuthenticated')
    return authState === 'true'
  })

  useEffect(() => {
    // Save authentication state to localStorage
    localStorage.setItem('isAuthenticated', isAuthenticated.toString())
  }, [isAuthenticated])

  const login = (credentials) => {
    // Simple authentication logic - in real app, this would validate against a backend
    if (credentials.username && credentials.password) {
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
