import './Header.css';
import sonsWhite from '../assets/Sons-White.png';
import {Link} from 'react-scroll';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';

function Header(){
    /*useState criado para abrir ou fechar a caixa com as opções do menu nos dispositivos móveis*/
    const [toggleMenu, setToggleMenu] = useState(false);
    return(
    <div class="header">
        <img id="logo" src={sonsWhite} alt="Logo Sons Do Futuro"/>
        <div class="buttons">
            <nav>
                <ul>
                    <li class="botoes-header">
                        <Link to="secao-lineup" smooth={true}>LINE-UP</Link>
                    </li>
                    <li class="botoes-header">
                        <Link to="secao-informacoes" smooth={true} offset={-90}>INFORMAÇÕES</Link>
                    </li>
                    <li class="botoes-header">
                        <a href='https://www.ticketmaster.com.br/'>INGRESSOS</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="mobile-menu">
            <div class="menu-box">
            {/*Atualiza o estado toggleMenu*/}
            {toggleMenu ? (
                <RiCloseLine
                color="#D8D8D8"
                size={30}
                onClick={()=> setToggleMenu(false)}/>
            ) : (
                <RiMenu3Line
                color="#D8D8D8"
                size={30}
                onClick={()=> setToggleMenu(true)}/>
            )}
            {toggleMenu && (
                <div class="menu-links">
                   <ul>
                    <li class="botoes-header">
                        <Link to="secao-lineup" smooth={true}>LINE-UP</Link>
                    </li>
                    <li class="botoes-header">
                        <Link to="secao-informacoes" smooth={true} offset={-90}>INFORMAÇÕES</Link>
                    </li>
                    <li class="botoes-header">
                        <a href='https://www.ticketmaster.com.br/'>INGRESSOS</a>
                    </li>
                </ul> 
                </div>

            )}
            </div>
        </div>
    </div>
    )
}

export default Header