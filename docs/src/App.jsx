import { useState } from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import Principal from "./componentes/Principal";

function App() {
    const [filmes, setFilmes] = useState("padrão");

  return (
    <div className='App'>
        <Navbar/>
        <Inicio/>
        <Principal filmes = {filmes} setFilmes = {setFilmes}/>
    </div>
  )
}

export default App;
