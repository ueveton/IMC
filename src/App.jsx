import { useState } from 'react'
import { ImcFront } from './Components/ImcFront'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <ImcFront />
      </div>
    </>
  )
}

export default App
