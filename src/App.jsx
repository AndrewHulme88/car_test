import { useState } from 'react'
import './App.css'
import Car from './Car'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Car />
    </>
  )
}

export default App
