import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cart from './compont/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='AppMain'>
     <Cart/>
    </div>
  )
}

export default App
