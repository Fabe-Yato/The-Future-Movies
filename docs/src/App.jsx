import { useState, useEffect } from 'react'
import "./App.css"
import Aos from 'aos';

import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import LancamentosFilmes from "./componentes/LancamentosFilmes";
import SobreFilmeNav from './componentes/SobreFilmeNav';
import SobreFilmeSinopse from './componentes/SobreFilmeSinopse';
import SobreFilmePersonagens from './componentes/SobreFilmePersonagens';

function App() {
    const [filmes, setFilmes] = useState(""); //estado que indica o nome do filme
    let bannerFilmes = document.querySelector(".conteudo-principal-filmes");
    
    const filmesClass = [
      "doutor-estranho-banner", 
      "morbius-banner", 
      "dumbledore-banner", 
      "thor-banner",
      "halloween-banner"
    ] //classes dos filmes

    //Atualiza a imagem dos filmes sempre que o mouse passar em cima
    useEffect(()=>{

      switch(filmes){
        case "Doutor Estranho no Multiverso da Loucura - Maio 2022":
           filmesClass.map((filmesClass)=>bannerFilmes.classList.remove(filmesClass));    //remove todas as classes 
           bannerFilmes.classList.add("doutor-estranho-banner"); //adiciona a classe desejada
           break;

        case "Morbius - Março 2022": 
           filmesClass.map((filmesClass)=>bannerFilmes.classList.remove(filmesClass));
           bannerFilmes.classList.add("morbius-banner");
           break;

        case "Os Segredos de Dumbledore - Abril 2022":
           filmesClass.map((filmesClass)=>bannerFilmes.classList.remove(filmesClass));
           bannerFilmes.classList.add("dumbledore-banner");
           break;  
           
        case "Thor: Amor e Trovão - Julho 2022":
           filmesClass.map((filmesClass)=>bannerFilmes.classList.remove(filmesClass));
           bannerFilmes.classList.add("thor-banner");
           break;

        case "Halloween Ends - Outubro 2022":
           filmesClass.map((filmesClass)=>bannerFilmes.classList.remove(filmesClass));
           bannerFilmes.classList.add("halloween-banner");
      }
    }, [filmes]);

  return (
    <div className='App'>
        <Navbar/>
        <Inicio/>
        <LancamentosFilmes filmes = {filmes} setFilmes = {setFilmes}/>
        <SobreFilmeNav/>
        <SobreFilmeSinopse/>
        <SobreFilmePersonagens/>
    </div>
  )
}

export default App;
