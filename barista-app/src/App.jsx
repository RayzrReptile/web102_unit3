import { useState } from 'react'
import viteLogo from '/vite.svg'
import BaristaForm from './components/BaristaForm';
import './App.css'

function App() {

  return (
    <div>
      <div className="title-container">
        <h1 className="title">On My Grind</h1>
        <p className="subtitle">So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
