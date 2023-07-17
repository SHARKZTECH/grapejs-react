import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WebBuilder from './components/WebBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <WebBuilder/>
    </>
  )
}

export default App
