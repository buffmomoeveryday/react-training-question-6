import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeApp from './components/WelcomeApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <WelcomeApp />
  )
}

export default App
