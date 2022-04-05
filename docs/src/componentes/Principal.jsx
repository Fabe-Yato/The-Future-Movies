import react from "react";
import SerraEletrica from "../imgs/massacre-da-serra-eletrica.jpg";
import Morbius from "../imgs/morbius-poster.jpg";
import Dumbledore from  "../imgs/secrets-of-dumbledore.jpg";
import DoutorEstranho from "../imgs/doutor-estranho.webp";
import HalloWeen from "../imgs/halloween-ends.jpg"

const Principal = () =>{
    return(
        <div className="conteudo-principal-filmes">
            {/* <p className="legenda-lancamentos">Próximos Lançamentos</p> */}
            <div id="proximo-lancamento" className="filmes-futuros">
                <div className="ponta-filmes">
                    <img src={SerraEletrica}/>
                </div>
                <div className="centro-filmes">
                    <img src={Morbius}/>
                </div>
                <div className="centro-filme">
                    <img src={Dumbledore}/>
                </div>
                <div className="centro-filmes">
                    <img src={DoutorEstranho}/>
                </div >
                <div className="ponta-filmes">
                    <img src={HalloWeen}/>
                </div>
            </div>

            <h1 className="nome-filme-lancamento">Halloween Ends - Outubro 2022</h1>

        </div>
    )
}

export default Principal;