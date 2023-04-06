import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <div id="new-player-form"></div>
  <div id="all-players-container"></div>
  </>
  )
}

export default App
