import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);

  const addValue = ()=>{
    // console.log('clicked',counter);
    // counter=counter+1;//this just update the value and not the UI 
//this is the correct way to update the UI using the react hoooks
if(counter>=20){
  counter=20;
}
else{
  setCounter(counter+1);
}
  }

  const removeValue=()=>{
    if(counter<=0){
      counter=0;
    }
    else{
      setCounter(counter-1);
    }
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button
     onClick={addValue}
      >add value</button>
      <br/>
      <button
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
