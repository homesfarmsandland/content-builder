import React from 'react'
import { HomeScreen, Footer } from './components'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HomeScreen />
      <Footer toolName="Content Builder" />
    </div>
  )
}

export default App
