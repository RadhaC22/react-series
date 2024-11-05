import React from 'react'
import ReactDOM from 'react-dom/client'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Custom App</h1>
    </div>
  )
}
//this cannot be passed as reactElement directly as this in not the valid syntax for any object.
// const reactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }


// here we created a valid object that can be direact passed and used to display
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// here the below code is the valid syntax that react provide us to do : 1. tag 
//2. attributes 
//3.HTML text
const anotherUser = 'chai aur react';
const reactElement = React.createElement(
  'a',
{href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // anotherElement {here in this way object can be called }
    // <MyApp/> // MyApp() can also be used as in the end it is function and a function can be called in its valid syntax
  //  reactElement //{here it is called}
   <App/>
)
