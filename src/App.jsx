import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto mt-10">
    <Header />
    <div className="md:mx-36 my-1 md:flex">
    <Form />
    </div>
    </div>
  )
}

export default App
