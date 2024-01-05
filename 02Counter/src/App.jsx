import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(5)

  const addvalue=()=>{
    if(Counter<20){
      setCounter(Counter+1)
    }
  }
  const removevalue=()=>{
    if(Counter>0){
      setCounter(Counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter Value:{Counter}</h2>

      <button
      onClick={addvalue}
      >Up value</button>
      <br/>
      <button
      onClick={removevalue}
      >Down value</button>
    </>
  )
}

export default App
