import './Footer.css';
import fb from '../assets/icons/fb.png';
import insta from '../assets/icons/insta.png';
import x from '../assets/icons/x.png';
import yt from '../assets/icons/yt.png';
import {Link} from 'react-scroll';

const redesSociais = {
    fb,
    insta,
    x,
    yt
}

function Footer() {
    return(
        <div class="footer">
            <div class="footer-links-box"> 
                <div class="footer-links-div"> 
                    <div class="footer-links"> 
                        <h2>Seções</h2>
                        <Link to="secao-lineup" smooth={true}>Line-Up</Link>
                        <Link to="secao-informacoes" smooth={true} offset={-90}>Informações</Link>
                        <a href='https://www.ticketmaster.com.br/'>Ingressos</a>
                    </div>
                    <div class="footer-links">
                        <h2> Empresa</h2>
                        <p>Sobre</p>
                        <p>Imprensa</p>
                        <p>Trabalhe conosco</p>
                    </div>
                    <div class="footer-links">
                        <h2>Mais</h2>
                        <p>Termos e Condições</p>
                        <p>Privacidade</p>
                        <p>Segurança</p>
                    </div>
                        <div class="footer-links">
                            <h2>Redes Sociais</h2>
                            <div class="secao-redes-sociais">
                                <a href="https://www.instagram.com/"> 
                                    <img src={insta} alt='Logo do Instagram' class="logo-redes-sociais"/>
                                    <p>Instagram </p>
                                </a>
                                <a href="https://www.x.com/"> 
                                    <img src={x} alt='Logo do X' class="logo-redes-sociais" />
                                    <p>X</p>
                                </a>
                                <a href="https://www.facebook.com/"> 
                                    <img src={fb} alt='Logo do Facebook' class="logo-redes-sociais" />
                                    <p>Facebook</p>
                                </a>
                                <a href="https://www.youtube.com/"> 
                                    <img src={yt} alt='Logo do Youtube' class="logo-redes-sociais" />
                                    <p>Youtube</p>
                                </a>
                            </div>
                            
                        </div>
                </div>
            </div>
            <div class="footer-baixo">
                <p>
                    @{new Date().getFullYear()} Síntese Jr. Todos os direitos reservados.
                </p>

            </div>
        </div>
    )
}

export default Footer