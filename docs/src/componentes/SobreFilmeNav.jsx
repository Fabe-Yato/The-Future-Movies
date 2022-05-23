import react from 'react'
import LogoBatman from "../imgs/the-batman-logo.png"

const SobreFilmeNav = () => {
    return(
        <div id="sobre-filme">
            <nav >
                <ul className="lista-Navbar-filme" data-aos="fade-right"
                data-aos-duration="2000">
                    <li>
                        <img data-aos="fade-left" className="logo-filme" src={LogoBatman}/>
                    </li>
                    <li> <a href="#sinopse">Sinopse</a> </li>
                    <li> <a href="#personagens">Personagens</a> </li>
                </ul>
            </nav>
            
        </div>
    )
}

export default SobreFilmeNav;
