import { useState } from 'react'
import RandomColor from './random-color/RandomColor'

import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <RandomColor />
    </div>
  )
}

export default App
