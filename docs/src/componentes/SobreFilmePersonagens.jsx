import BatmanPersonagem from '../imgs/the-batman.jpg';
import CatWomanPersonagem from '../imgs/mulher-gato-Batman.webp';
import RiddlerPersonagem from '../imgs/charada-batman-filme.jpg';
import PenguinPersonagem from '../imgs/The-Batman-Penguin.webp';

//batman e outros personagens
import ThomasHowardPrincipal from '../imgs/thomas-howard-principal.jpg';
import ThomasHoward from '../imgs/thomas-howard-icone.jpg';
import CedricoDiggoryPrincipal from '../imgs/Cedrico-Diggory-principal.webp' ;
import CedricoDiggory from '../imgs/cedrico-diggory.jpg';
import EdwardCullenPrincipal from '../imgs/edward-cullen-principal.jpg';
import EdwardCullen from '../imgs/edward-cullen-icone.webp';

//catwoman e outros personagens
import Toast from '../imgs/toast-icone.png';
import ToastPrincipal from '../imgs/toast-principal.jpg';
import Christina from '../imgs/christina-icone.jpg';
import ChristinaPrincipal from '../imgs/christina-principal.jpg';
import Leta from '../imgs/leta-lestrange-icone.webp';
import LetaPrincipal from '../imgs/leta-lestrange-principal.webp';

//riddler e outros personagens
import PaulSunday from '../imgs/paul-sunday-icone.png';
import PaulSundayPrincipal from '../imgs/paul-sunday-principal.webp';
import Percy from '../imgs/percy-dolarhyde-icone.webp';
import PercyPrincipal from '../imgs/percy-dolarhdye-principal.webp';
import Dwayne from '../imgs/dwayne-hoover-icone.jpg';
import DwaynePrincipal from '../imgs/dwayne-hoover-principal.jpg';

//penguim e outros personagens
import Mercenario from '../imgs/mercenario-icone.jpg';
import MercenarioPrincipal from '../imgs/mercenario-principal.jpg';
import HenryDrax from '../imgs/henry-drax-icone.webp';
import HenryDraxPrincipal from '../imgs/henry-drax-principal.jpg';
import HoltFarrier from '../imgs/holt-farrier-icone.webp';
import HoltFarrierPrincipal from '../imgs/holt-farrier-principal.webp';

const SobreFilmePersonagens = () => {
    const batmanPicChange = (nome)=>{
        
        if(nome == "Thomas"){
            const batmanPic = document.querySelector(".batman-pic");
            const batmanName = document.querySelector(".batman-name");
            batmanPic.src = ThomasHowardPrincipal;
            batmanName.innerHTML = "Thomas Howard";
        }
        else if(nome == "Cedrico"){
            const batmanPic = document.querySelector(".batman-pic");
            const batmanName = document.querySelector(".batman-name");
            batmanPic.src = CedricoDiggoryPrincipal;
            batmanName.innerHTML = "Cedrico Diggory";
        }
        else if(nome == "Edward"){
            const batmanPic = document.querySelector(".batman-pic");
            const batmanName = document.querySelector(".batman-name");
            batmanPic.src = EdwardCullenPrincipal;
            batmanName.innerHTML = "Edward Cullen";
        }     
    }
    const CatwomanPicChange = (nome)=>{
        
        if(nome == "Toast"){
            const catwomanPic = document.querySelector(".catwoman-pic");
            const catwomanName = document.querySelector(".catwoman-name");
            catwomanPic.src = ToastPrincipal;
            catwomanName.innerHTML = "Toast";
        }
        else if(nome == "Christina"){
            const catwomanPic = document.querySelector(".catwoman-pic");
            const catwomanName = document.querySelector(".catwoman-name");
            catwomanPic.src = ChristinaPrincipal;
            catwomanName.innerHTML = "Christina";
        }
        else if(nome == "Leta"){
            const catwomanPic = document.querySelector(".catwoman-pic");
            const catwomanName = document.querySelector(".catwoman-name");
            catwomanPic.src = LetaPrincipal;
            catwomanName.innerHTML = "Leta Lestrange";
        }     
    }
    const RiddlerPicChange = (nome)=>{
        
        if(nome == "Paul"){
            const riddlerPic = document.querySelector(".riddler-pic");
            const riddlerName = document.querySelector(".riddler-name");
            riddlerPic.src = PaulSundayPrincipal;
            riddlerName.innerHTML = "Paul Sunday";
        }
        else if(nome == "Percy"){
            const riddlerPic = document.querySelector(".riddler-pic");
            const riddlerName = document.querySelector(".riddler-name");
            riddlerPic.src = PercyPrincipal;
            riddlerName.innerHTML = "Percy Dolarhyde";
        }
        else if(nome == "Dwayne"){
            const riddlerPic = document.querySelector(".riddler-pic");
            const riddlerName = document.querySelector(".riddler-name");
            riddlerPic.src = DwaynePrincipal;
            riddlerName.innerHTML = "Dwayne Hoover";
        }        
    }
    const PenguinPicChange = (nome)=>{
        
        if(nome == "Mercenario"){
            const penguinPic = document.querySelector(".penguin-pic");
            const penguinName = document.querySelector(".penguin-name");
            penguinPic.src = MercenarioPrincipal;
            penguinName.innerHTML = "Mercenário";
        }
        else if(nome == "Henry"){
            const penguinPic = document.querySelector(".penguin-pic");
            const penguinName = document.querySelector(".penguin-name");
            penguinPic.src = HenryDrax;
            penguinName.innerHTML = "Henry Drax";
        }
        else if(nome == "Holt"){
            const penguinPic = document.querySelector(".penguin-pic");
            const penguinName = document.querySelector(".penguin-name");
            penguinPic.src = HoltFarrier;
            penguinName.innerHTML = "Holt Farrier";
        }        
    }
         
    return(
        <div>
            <h1>PERSONAGENS</h1>
            <div className="personagens-container">
                <div className="personagens">
                    <img  className="batman-pic" src={BatmanPersonagem}/>
                    <p className="batman-name">Batman</p>
                    <p className='nome-atores'>Robert Pattinson</p>
                    <div className="outros-personagens">
                        <img onClick={()=> batmanPicChange("Thomas")} src={ThomasHoward}/>
                        <img onClick={()=> batmanPicChange("Cedrico")} src={CedricoDiggory}/>
                        <img onClick={()=> batmanPicChange("Edward")} src={EdwardCullen}/>
                    </div>
                </div>
                <div className="personagens">
                    <img className="catwoman-pic" src={CatWomanPersonagem}/>
                    <p className="catwoman-name">Mulher-Gato</p>
                    <p className='nome-atores'>Zoe Kravitz</p>
                    <div className="outros-personagens">
                        <img onClick={()=> CatwomanPicChange("Toast")} src={Toast}/>
                        <img onClick={()=> CatwomanPicChange("Christina")} src={Christina}/>
                        <img onClick={()=> CatwomanPicChange("Leta")} src={Leta}/>
                    </div>
                </div>
                <div className="personagens">
                    <img className="riddler-pic" src={RiddlerPersonagem}/>
                    <p className="riddler-name" >Charada</p>
                    <p className='nome-atores'>Paul Dano</p>
                    <div className="outros-personagens">
                        <img onClick={()=> RiddlerPicChange("Paul")} src={PaulSunday}/>
                        <img onClick={()=> RiddlerPicChange("Percy")} src={Percy}/>
                        <img onClick={()=> RiddlerPicChange("Dwayne")} src={Dwayne}/>
                    </div>
                </div>
                
                <div className="personagens">
                    <img className="penguin-pic" src={PenguinPersonagem}/>
                    <p className="penguin-name" >Pinguim</p>
                    <p className='nome-atores'>Collin Farrel</p>
                    <div className="outros-personagens">
                        <img onClick={()=> PenguinPicChange("Mercenario")} src={Mercenario}/>
                        <img onClick={()=> PenguinPicChange("Henry")} src={HenryDrax}/>
                        <img onClick={()=> PenguinPicChange("Holt")} src={HoltFarrier}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreFilmePersonagens;
