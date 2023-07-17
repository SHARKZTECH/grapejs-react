import { useState } from 'react'
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
