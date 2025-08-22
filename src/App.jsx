import Header from './components/Header';
import LineUp from './components/LineUp';
import Informacoes from './components/Informacoes';
import Footer from './components/Footer';
import Slider from './components/Slider';
import './App.css'

import VisaoGeral from './assets/Visao-Geral.png';

function App(){
  return(
    <div>
    <Header/>
    <div id='secao-lineup'>
      <h1 class="titulo-secao">Line-up</h1>
      <div class="cards">
      {/*Abaixo temos um componente criado para os cards dos artistas que é reutilizado 5 vezes e aceita props (nomes e fotos)*/}
      <LineUp dia="01" card="card1" nome1="The Beatles" nome2="Anitta" nome3="Roberto Carlos" foto1="TheBeatles" foto2="Anitta" foto3="RobertoCarlos" />
      <LineUp dia="02" card="card2" nome1="Ivete Sangalo" nome2="Travis Scott" nome3="Kendrick Lamar" foto1="IveteSangalo" foto2="TravisScott" foto3="Kendrick" />
      <LineUp dia="03" card="card3" nome1="The Weeknd" nome2="Mc Lan" nome3="Sabrina Carpinter" foto1="TheWeeknd" foto2="McLan" foto3="Sabrina" />
      <LineUp dia="04" card="card4" nome1="BTS" nome2="Fábio de Melo" nome3="Xuxa" foto1="BTS" foto2="Padre" foto3="Xuxa" />
      <LineUp dia="05" card="card5" nome1="Queen" nome2="Mc Pipokinha" nome3="Gilberto Gil" foto1="Queen" foto2="Pipokinha" foto3="Gilberto" />
      </div>
    </div>
    {/*O slider foi feito com a biblioteca Swiper e apresenta imagens do festival em loop*/}
    <Slider/>
    <div id='secao-informacoes'>
      <h1 class="titulo-secao">Informações</h1>
      <div class="colunas-informacoes">
        <div class="coluna-esquerda">
          <Informacoes nomeInformacao="Local:" informacao="Autódromo de Interlagos - Av. Sen. Teotônio Vilela, 261 - Cidade Dutra, São Paulo - SP, 04792-100"/>
          <Informacoes nomeInformacao="Horário:" informacao="15:00-02:00 (Portões fecham as 23:00)"/>
          <Informacoes nomeInformacao="Sons Pass:" informacao="O festival desse ano conta com novidades! Apresentamos o Sons Pass, um passe que permitirá mais conforto, diversão e menos filas para uma melhor experiência."/>
          <Informacoes nomeInformacao="Segurança:" informacao="Contamos com uma grande equipe que estará sempre observando e garantindo a segurança de todos os presentes e de seus pertences."/>
          <Informacoes nomeInformacao="Acessibilidade:" informacao="O evento conta com espaços assecíveis e inclusíveis, que oferecem apoio e conforto para pessoas com necessidades especiais. Há a sala conforto (ambiente com isolamento acústico e com saídas de som próprio, proporcionando uma experiência mais tranquila  para pessoas com TEA), espaço reservado para idosos, gestantes, PCDs e obesos, atendentes para guiar deficientes visuais."/>
        </div>
        <div class="coluna-direita">
          <Informacoes nomeInformacao="Mapa:" informacao="" img={VisaoGeral}/>
        </div>
      </div>
      <Footer/>
    </div>
    
  </div>
  )
  }

export default App
