import React from "react";
import LogoBatman from "../imgs/the-batman-logo.png"
import RottenCritics from "../imgs/rotten-critics.png"
import RottenAudience from "../imgs/rotten-audience.png"
import ClassificacaoEtaria from "../imgs/14anos.webp"

const Inicio = ()=>{
    return(
        <div>
            <div className="conteudo-principal">
                <img className="logoBatman" src={LogoBatman} alt="batman-logo" />

                <iframe width="560" height="270" src="https://www.youtube.com/embed/rsQEor4y2hg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                <div className="informacoes-filmes">
                    <div className="critics">
                        <img src={RottenCritics} alt="RottenCritics"/>
                        <p className="nota-critica">85%</p>
                    </div>

                    <div className="informacoes-filmes">
                        <img className="audience" src={RottenAudience} alt="RottenCritics"/>
                        <p className="nota-audiencia">89%</p>
                    </div>

                    <div>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                    <div>
                        <div className="atores-legenda">Atores:</div>
                        <div className="atores">Robert Pattinson, Zoe Kravitz, Paul Dano</div>
                    </div>
                    <div>
                        <img className="classificacao" src={ClassificacaoEtaria} alt="" />
                    </div>
                    <div className="bilheteria">
                        <p>$248 MILHÕES ARRECADADOS</p>
                    </div>
                    <div className="data">
                        <p>03 DE MARÇO 2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;