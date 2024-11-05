import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './components/Card';

function App() {
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr=[1,2,3];
  return (
    <>
      <h1 className="bg-green-300 text-black rounded-xl p-4 mb-3">Tailwind test</h1>
     <Card username="chiaaurcode" btnText="Click me"/>
     <Card username="radha" btnText="View me"/>
    </>
  );
}

export default App;
