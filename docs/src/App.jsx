import { useState, useEffect } from 'react'
import "./App.css"
import Navbar from "./componentes/Navbar";
import Inicio from "./componentes/Inicio";
import LancamentosFilmes from "./componentes/LancamentosFilmes";

function App() {
    const [filmes, setFilmes] = useState(" ");
    let bannerFilmes = document.querySelector(".conteudo-principal-filmes");
    
    const filmesClass = [
      "doutor-estranho-banner", 
      "morbius-banner", 
      "dumbledore-banner", 
      "thor-banner",
      "halloween-banner"
    ]

    useEffect(()=>{
      if(filmes == "Doutor Estranho no Multiverso da Loucura - Maio 2022"){
          filmesClass.map((filmesClass)=>{
              bannerFilmes.classList.remove(filmesClass);
          })
          bannerFilmes.classList.add("doutor-estranho-banner");
      }


      else if(filmes == "Morbius - Março 2022"){
          filmesClass.map((filmesClass)=>{
             bannerFilmes.classList.remove(filmesClass);
          })
          bannerFilmes.classList.add("morbius-banner");
      }


      else if(filmes == "Os Segredos de Dumbledore - Abril 2022"){
          filmesClass.map((filmesClass)=>{
              bannerFilmes.classList.remove(filmesClass);
          })
          bannerFilmes.classList.add("dumbledore-banner");
      }

      else if(filmes == "Thor: Amor e Trovão - Julho 2022"){
        filmesClass.map((filmesClass)=>{
            bannerFilmes.classList.remove(filmesClass);
        })
        bannerFilmes.classList.add("thor-banner");
      }

      else if(filmes == "Halloween Ends - Outubro 2022"){
        filmesClass.map((filmesClass)=>{
            bannerFilmes.classList.remove(filmesClass);
        })
        bannerFilmes.classList.add("halloween-banner");
      }

    }, [filmes]);

  return (
    <div className='App'>
        <Navbar/>
        <Inicio/>
        <LancamentosFilmes filmes = {filmes} setFilmes = {setFilmes}/>
    </div>
  )
}

export default App;
