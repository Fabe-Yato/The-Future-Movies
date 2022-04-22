import React from "react";
import "../App.css"

const Navbar = () =>{
    return(
        <div>
            <nav className="Navbar">
                <ul className="lista-Navbar">
                    <li>
                        <a href="#proximo-lancamento">Próximos Lançamentos</a>
                    </li>
                    <li>
                        <a href="#">Sobre o Filme</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
