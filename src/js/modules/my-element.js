import { LitElement, html, css} from "lit";
import 'boxicons'
import { obtenerDatosSpotify} from '../data/getData.js'

export class Myelementup extends LitElement{
  

  constructor(){
    super();
    this.trackInfo = {};
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.obtenerDatosyActualizar();
  }

  async obtenerDatosyActualizar() {
    try {
      this.trackInfo = await obtenerDatosSpotify();
    } catch(error) {
      console.error('Error al obtener los datos de Spotify:' , error)
    }
    this.requestUpdate();
  }

  static styles = css`

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: MiFuente, Arial, sans-serif;
    }
    .middleup__cont__img{
      width: 100%;
      display: flex;
      justify-content: center;
      & img{
        width: 90%
      }
    }
    .middleup__description{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      font-size: 1.2vw;
      padding: 20px 0;
    }
    #p1{
      font-weight: bold;
    }

    .middleup__bar{
      width: 100%;
    }
    .bar__desc{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .bar__bar{
      width: 100%;
      height: 5px;
      margin: 5px 3px;
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid gray
    }
    .bar__in{
      width: 70%;
      height: 100%;
      background-color: green;
    }

    box-icon:hover {
      cursor: pointer;
    }

    box-icon {
      
    }

    i{
      color: #9BD8B5;
      font-size: 2vw;
    }

    i:hover{
      cursor: pointer;  
    }

  `


  render(){
    let firstTrack = this.trackInfo.tracks.items[0] 
    console.log(this.trackInfo)
    return html`
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="middleup__cont__img">
      <img src="${this.trackInfo.images[0].url}">
    </div>
    <div class="middleup__description">
      <i class='bx bx-plus'></i>
      <div class="description__info">
        <p id="p1">${firstTrack.name}</p>
        <p id="p2">${firstTrack.artists[0].name}</p>
      </div>
      <i class='bx bx-heart'></i>
    </div>
    <div class="middleup__bar">
      <div class="bar__desc">
        <p> 2:14 </p>
        <p> -1:15 </p>
      </div>
      <div class="bar__bar">
        <div class="bar__in"></div>
      </div>
    </div> 
    `;
  }
}

class Myelementdown extends LitElement{
  constructor(){
    super();
  }
  static styles = css`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .middledown__play{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin: 1vw 0 2vw 0;
  }

  .middledown__volume{
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
  }

  .volume__bar{
    width: 98%;
    margin: 0 2px;
    height: 5px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid gray
  }
  
  .volume__bar__bar{
    background-color: green;
    height: 100%;
    width: 50%
  }

  `;
  render(){
    return html`
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <div class="middledown__play">
      <box-icon name='shuffle'></box-icon>
      <box-icon name='rewind' size='md'></box-icon>
      <box-icon name='play-circle' size='lg'></box-icon>
      <box-icon name='fast-forward' size='md'></box-icon>
      <box-icon name='repeat'></box-icon>
    </div>
    <div class="middledown__volume">
      <box-icon type='solid' name='volume-low'></box-icon>
      <div class="volume__bar">
        <div class="volume__bar__bar"></div>
      </div>
      <box-icon name='volume-full' type='solid'></box-icon>
    </div>
    <div></div>
    `
  }
}

customElements.define("my-elementup", Myelementup)
customElements.define("my-element-down", Myelementdown)