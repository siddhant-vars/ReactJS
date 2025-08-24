import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <div>
      <h1>custom react | chai</h1>
    </div>
  )
}

// const reactElement={
//     type:'a',
//     props:{
//         href:'http://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit Google'
// }

const anotherElement=(
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'http://google.com',target:'_blank'},
  'visit to google.com'
)

createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
