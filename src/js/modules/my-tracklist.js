import { LitElement, css, html } from "lit";
import { obtenerDatosSpotify } from "../data/getData";

export class Mytracklist extends LitElement{

    constructor(){
        super();
        this.trackInfo = [];
    }

    static properties = {
        trackInfo: {type: Array}
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
        .tracklist{
            width: 100%;
            height: 82%;
            overflow-y: scroll;
            overflow-x: hidden;
        }

        .section__track{
            width: 100%;
            height: 100%;

            & h1{
                font-size: 2vw;
                margin: 0;
                margin-bottom: 5px;
            }

            & i{
                font-size: 1.5vw;
                color: grey;
            }

            & p{
                margin: 0;
                margin: 5px 0;
                color: grey;
            }
        }

        .tracklist__cont{
            width: 100%;
            height: 10%;
            margin: 5px;
            display: flex;

            & img{
                height: 100%
            }
        }



    `

    render(){
        return html`
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <section class="section__track">
            <h1>Track List</h1>
            <div>
                <i class='bx bx-shuffle'></i>
                <i class='bx bx-repeat'></i>
            </div>
            <p>Playing next</p>
            <div class="tracklist">
                ${this.chargeContentTopChart()}
            </div>
        </section>
        `
    }

    chargeContentTopChart(){
        const listaCanciones = this.trackInfo.tracks.items
        console.log(listaCanciones)
        console.log(this.trackInfo)
        return html`
         ${listaCanciones.map(val => html`
            <div class="tracklist__cont">
                <img src="${this.trackInfo.images[0].url}" class="tracklist__cont__img">
                <div class="contenido">
                    <p class="topchart__p">${val.name}</p>
                    <p>${this.trackInfo.artists[0].name}</p>
                </div>
            </div>
         `)}
        `

    }

}

customElements.define("my-tracklist", Mytracklist)