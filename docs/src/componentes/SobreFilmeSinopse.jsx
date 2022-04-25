import BatmanSinopseImage from '../imgs/thebat.png';

const SobreFilmeSinopse = () => {
    return(
        <div>
            <div className="sinopse-filme">
                <img src={BatmanSinopseImage}/>

                <div>
                    <h1>SINOPSE</h1>
                    <p className="filme-sinopse-texto">
                        Já em seu segundo ano em ação pela cidade de Gotham, um Batman vingativo se depara com diversos assassinatos de pessoas importantes na politica. O herói mascarado se vê correndo contra o tempo para investigar quem está por trás de todas essas mortes e parar o responsável a todo custo.
                    </p>
                </div>  
            </div>
        </div>
    )
}

export default SobreFilmeSinopse;
