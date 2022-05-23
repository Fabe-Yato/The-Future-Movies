import react from "react";
import Thor from "../imgs/thor-amor-e-trovao-poster.jpg";
import Morbius from "../imgs/morbius-poster.jpg";
import Dumbledore from  "../imgs/secrets-of-dumbledore.jpg";
import DoutorEstranho from "../imgs/doutor-estranho.webp";
import HalloWeen from "../imgs/halloween-ends.jpg";


const LancamentosFilmes = (props) =>{
    const ThorFilme = () =>{
        props.setFilmes("Thor: Amor e Trovão - Julho 2022");
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

        <div  className="conteudo-principal-filmes">
            <div 
            data-aos="fade-up"
            data-aos-duration="3000"
            className="filmes-futuros">
                <div className="ponta-filmes" 
                    data-aos="flip-left" 
                    data-aos-duration="3000">
                    <img  onMouseEnter={ThorFilme} src={Thor}/>
                </div>
                <div className="centro-filmes"
                    data-aos="flip-left" 
                    data-aos-duration="3000">
                    <img onMouseEnter={MorbiusFilme} src={Morbius}/>
                </div>
                <div className="centro-filme"
                    data-aos="flip-left" 
                    data-aos-duration="3000">
                    <img onMouseEnter={DumbledoreFilme} src={Dumbledore}/>
                </div>
                <div className="centro-filmes"
                    data-aos="flip-left" 
                    data-aos-duration="3000" >
                    <img onMouseEnter={DoutorEstranhoFilme} src={DoutorEstranho}/>
                </div >
                <div className="ponta-filmes"
                    data-aos="flip-left" 
                    data-aos-duration="3000" >
                    <img onMouseEnter={HalloweenFilme} src={HalloWeen}/>
                </div>
            </div>

            <h1 className="nome-filme-lancamento">{props.filmes}</h1>

        </div>
       
    )
}

export default LancamentosFilmes;
