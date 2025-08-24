import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter, setCounter] = useState(15)
    let [color, setColor] = useState("green")
    // let counter=15

    const addvalue=()=>{
      counter >= 22? 22 : setCounter(counter + 1);
    }

    const removeValue=()=>{
      counter<=0?0:setCounter(counter-1)
    }

  const changeColor = () => {
    if(color === "green"){
      document.body.style.backgroundColor = "blue";
      setColor("red")
    } else if (color === "red"){
        document.body.style.backgroundColor = "white";
        setColor("green");
    }
  }

    

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value:{counter}</h2>
      <button style={{backgroundColor: color}} onClick={changeColor}>Change Color</button>
      <button style={{backgroundColor: color}}  onClick={addvalue} >ADD value{counter}</button>
      <br />
      <button style={{backgroundColor: color}}  onClick={removeValue}>Remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
