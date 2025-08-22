import './LineUp.css';
import RobertoCarlos from '../assets/artistas/RobertoCarlos.png'
import Anitta from '../assets/artistas/Anitta.png'
import TheBeatles from '../assets/artistas/TheBeatles.png'
import IveteSangalo from '../assets/artistas/IveteSangalo.png'
import BTS from '../assets/artistas/BTS.png'
import Gilberto from '../assets/artistas/Gilberto.png'
import Kendrick from '../assets/artistas/Kendrick.png'
import McLan from '../assets/artistas/McLan.png'
import Padre from '../assets/artistas/Padre.png'
import Pipokinha from '../assets/artistas/Pipokinha.png'
import Queen from '../assets/artistas/Queen.png'
import Sabrina from '../assets/artistas/Sabrina.png'
import TheWeeknd from '../assets/artistas/TheWeeknd.png'
import TravisScott from '../assets/artistas/TravisScott.png'
import Xuxa from '../assets/artistas/Xuxa.png'


const imagens = {
  RobertoCarlos,
  Anitta,
  TheBeatles,
  IveteSangalo,
  BTS,
  Gilberto,
  Kendrick,
  McLan,
  Padre,
  Pipokinha,
  Queen,
  Sabrina,
  TheWeeknd,
  TravisScott,
  Xuxa,
}

function LineUp(props){
    return(
        <div id='lineup'>
            <div class={props.card}>
                <h2 class="dia">DIA {props.dia}</h2>
                    <div class="fotos-artistas">
                        <img src={imagens[props.foto3]} id="foto-esquerda" alt={props.nome3}/>
                        <img src={imagens[props.foto1]} id="foto-meio" alt={props.nome1}/>
                        <img src={imagens[props.foto2]} id="foto-direita" alt={props.nome2}/>
                    </div>
                    <div class="artistas">
                        <h3 class="nome1">{props.nome1}</h3>
                        <h3>{props.nome2}</h3>
                        <h3>{props.nome3}</h3>
                    </div>
            </div>
        </div>
    )
}
export default LineUp