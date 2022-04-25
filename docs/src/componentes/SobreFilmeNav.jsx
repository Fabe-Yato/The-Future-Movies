import react from 'react'
import LogoBatman from "../imgs/the-batman-logo.png"

const SobreFilmeNav = () => {
    return(
        <div>
            <nav >
                <ul className="lista-Navbar-filme">
                    <li>
                        <img className="logo-filme" src={LogoBatman}/>
                    </li>
                    <li> <a href="#">Sinopse</a> </li>
                    <li> <a href="#">Personagens</a> </li>
                    <li> <a href="#">Avaliações</a> </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default SobreFilmeNav;
