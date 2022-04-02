import { useState } from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import Principal from "./componentes/Principal";

function App() {
  

  return (
    <div className='App'>
        <Navbar/>
        <Inicio/>
        <Principal/>
    </div>
  )
}

export default App;
