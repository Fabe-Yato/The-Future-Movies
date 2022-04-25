import BatmanSinopseImage from '../imgs/thebat.png';

const SobreFilmeSinopse = () => {
    return(
        <div>
            <h1>SINOPSE</h1>
            <div className="sinopse-filme">
                <img src={BatmanSinopseImage}/>
                <p className="filme-sinopse-texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam cumque deleniti voluptas eos molestias ratione laudantium aut cupiditate exercitationem reprehenderit esse aspernatur nihil, fugiat ipsam dolor! Modi, tenetur. Officiis.</p>
            </div>
        </div>
    )
}

export default SobreFilmeSinopse;
