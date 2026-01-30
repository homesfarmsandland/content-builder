import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useTheme } from '../contexts/ThemeContext'
import { Footer } from '.'

const Access = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuth()
  const { isDarkMode } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const success = login({ username: email, password })
    if (!success) {
      setError('Invalid credentials. Please try again.')
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-neutral-900' : 'bg-gray-50'}`}>
      <div className="flex-1 flex items-center justify-center">
        <div className={`max-w-md w-full space-y-8 p-8 rounded-lg border ${
          isDarkMode
            ? 'bg-neutral-800 border-neutral-700'
            : 'bg-white border-gray-200'
        }`}>
          <div>
            <h2 className={`text-center text-3xl font-bold mb-2 ${
              isDarkMode ? 'text-neutral-200' : 'text-neutral-800'
            }`}>
              Content Builder
            </h2>
            <p className={`text-center ${
              isDarkMode ? 'text-neutral-400' : 'text-gray-600'
            }`}>
              Sign in to manage your content
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-2 rounded">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-neutral-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    isDarkMode
                      ? 'bg-neutral-700 border-neutral-600 text-neutral-200'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="password" className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-neutral-300' : 'text-gray-700'
                }`}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    isDarkMode
                      ? 'bg-neutral-700 border-neutral-600 text-neutral-200'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 cursor-pointer border border-transparent rounded-md shadow-sm text-sm font-medium bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-colors ${isDarkMode ? 'bg-yellow-500 hover:bg-yellow-600 text-yellow-900' : 'bg-yellow-500 hover:bg-yellow-600 text-white'}`}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer toolName="Content Builder" />
    </div>
  )
}

export default Access
