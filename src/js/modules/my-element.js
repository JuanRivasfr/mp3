import { getDataTracks } from "../data/getData.js";
import { LitElement, html, css} from "lit";
import 'boxicons'
class Myelementup extends LitElement{
  constructor(){
    super();
    this.tracks = {};
  }
  static styles = css`
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .middleup__cont__img{
      width: 100%;
      display: flex;
      justify-content: center;
      & img{
        width: 60%
      }
    }
    .middleup__description{
      width: 100%;
      
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      font-size: 1vw;
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
      
      

      & p{
        
      }
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
  `
  async connectedCallback(){
    super.connectedCallback();
    this.tracks = await getDataTracks();
  }

  render(){
    return html`
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <div class="middleup__cont__img">
      <img src="${this.tracks[0].album.images[0].url}">
    </div>
    <div class="middleup__description">
      <box-icon name='plus'></box-icon>
      <div class="description__info">
        <p id="p1">Money Machine</p>
        <p id="p2">1000 Gecks</p>
      </div>
      <box-icon name='heart'></box-icon>
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