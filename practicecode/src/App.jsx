import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [firstnumber, setfirstNumber] = useState("")
  const [secondnumber, setsecondNumber] = useState("")
  const [combine, setcombine] = useState(false)
  const [result, setresult] = useState(null)
  
  const addValue = () => {
    const numberA = parseFloat(firstnumber);
    const numberB = parseFloat(secondnumber);
    setresult(numberA + numberB);
  }

  const removevalue = () => {
    setfirstNumber("")
    setsecondNumber("")
    result(null)
  }

  return (
    <>
      <h1>Hello combine</h1>
      <div>
        { result !== null ? result : null}
      </div>
      <input type='number' onChange={e => setfirstNumber(e.target.value)} 
      value={firstnumber} />
      <input type='number' onChange={e => setsecondNumber(e.target.value)} 
      value={secondnumber} />
      <button onClick={addValue} > + Add Value</button>
      <button onClick={removevalue}>Clear</button>

    </>
  )
}

export default App
