import './Informacoes.css';

function Informacoes(props){
    return (
        <div id='informacoes'>
            <h2 class="nome-informacao">{props.nomeInformacao}</h2>
            <h3 class="texto-informacao">{props.informacao}</h3>
            <img id='mapa-informacoes' src={props.img}/>
        </div>
    )
}
export default Informacoes