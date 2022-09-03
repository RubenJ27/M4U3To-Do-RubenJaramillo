import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-10">
    <Header />
    <div className="md:mx-36 my-1 md:flex">
    </div>
    </div>
  )
}

export default App
