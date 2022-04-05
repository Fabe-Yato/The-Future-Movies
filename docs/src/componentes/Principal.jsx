import react from "react";
import SerraEletrica from "../imgs/massacre-da-serra-eletrica.jpg";
import Morbius from "../imgs/morbius-poster.jpg";
import Dumbledore from  "../imgs/secrets-of-dumbledore.jpg";
import DoutorEstranho from "../imgs/doutor-estranho.webp";
import HalloWeen from "../imgs/halloween-ends.jpg"

const Principal = (props) =>{
    const MassacreSerra = () =>{
        props.setFilmes("O Massacre da Serra Eletrica - Fevereiro 2022");
    }
    const MorbiusFilme = () =>{
        props.setFilmes("Morbius - Março 2022");
    }
    const DoutorEstranhoFilme = () =>{
        props.setFilmes("Doutor Estranho no Multiverso da Loucura - Maio 2022");
    }
    const DumbledoreFilme = () =>{
        props.setFilmes("Os Segredos de Dumbledore - Abril 2022");
    }
    const HalloweenFilme = () =>{
        props.setFilmes("Halloween Ends - Outubro 2022");
    }

    return(
        <div className="conteudo-principal-filmes">
            <div id="proximo-lancamento" className="filmes-futuros">
                <div className="ponta-filmes">
                    <img onMouseEnter={MassacreSerra} src={SerraEletrica}/>
                </div>
                <div className="centro-filmes">
                    <img onMouseEnter={MorbiusFilme} src={Morbius}/>
                </div>
                <div className="centro-filme">
                    <img onMouseEnter={DumbledoreFilme} src={Dumbledore}/>
                </div>
                <div className="centro-filmes">
                    <img onMouseEnter={DoutorEstranhoFilme} src={DoutorEstranho}/>
                </div >
                <div className="ponta-filmes">
                    <img onMouseEnter={HalloweenFilme} src={HalloWeen}/>
                </div>
            </div>

            <h1 className="nome-filme-lancamento">{props.filmes}</h1>

        </div>
    )
}

export default Principal;