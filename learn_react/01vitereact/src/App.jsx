import Chai from "./chai"
//every react uses its bundler. Vite also uses a bundler like nowadays Babel is used. The role of bundler is to correct the syntax behind the scenes.
//React does not understand html thus it is jsx mix of html ans js
// Transpiler covert to jsx
function App() {
 const username = "chai aur code";

  return (
    <>
    <Chai/>
<h1>welcome to {username}</h1> 
{/* this {username} is called the evaluated expression. We cannot use any loops aur other js here as here only the outcome is written*/}
    </>

  )
}

export default App;
