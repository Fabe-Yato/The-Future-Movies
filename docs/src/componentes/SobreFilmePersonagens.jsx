import BatmanPersonagem from '../imgs/the-batman.jpg';
import CatWomanPersonagem from '../imgs/mulher-gato-Batman.webp';
import RiddlerPersonagem from '../imgs/charada-batman-filme.jpg';
import PenguinPersonagem from '../imgs/The-Batman-Penguin.webp';

const SobreFilmePersonagens = () => {
    return(
        <div>
            <h1>PERSONAGENS</h1>
            <div className="personagens-container">
                <div className="personagens">
                    <img src={BatmanPersonagem}/>
                    <p>Batman</p>
                    <p className='nome-atores'>Robert Pattinson</p>
                </div>
                <div className="personagens">
                    <img src={CatWomanPersonagem}/>
                    <p>Mulher-Gato</p>
                    <p className='nome-atores'>Zoe Kravitz</p>
                </div>
                <div className="personagens">
                    <img src={RiddlerPersonagem}/>
                    <p>Charada</p>
                    <p className='nome-atores'>Paul Dano</p>
                </div>
                <div className="personagens">
                    <img src={PenguinPersonagem}/>
                    <p>Pinguim</p>
                    <p className='nome-atores'>Collin Farrel</p>
                </div>
            </div>
        </div>
    );
}

export default SobreFilmePersonagens;
