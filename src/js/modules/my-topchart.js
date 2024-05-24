import { LitElement, css, html } from "lit";
import { obtenerDatosSpotify } from "../data/getData";

export class Mytopchart extends LitElement{

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
    
    .section__izq{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100%;
        color: #27AE60;
        font-size: 3vw;
        align-items: center;

        & i{
            margin: 10px;
        }
    }

    .division{
        width: 30px;
        height: 1px;
        background-color: grey;
    }

    .section__der{
        width: 100%;

        & h1{
            font-size: 50px;
            font-weight: bold;
            margin: 0;
        }

        & .topchart{
            width: 100%;
            height: 78%;
            overflow-y: scroll;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding-top: 5px;
            padding-bottom: 5px;

        }

        & .top-chart__cont{
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin: 10px 0;

            & p{
                margin: 0
            }

            & .topchart__p{
                font-weight: bold;
            }
        }

        & .imgtopchart{
            width: 100%
        }

    }
    
    `

    render(){
        return html`
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <section class="section__izq">
        <i class='bx bx-circle'></i>
        <i class='bx bxs-user-circle'></i>
        <div class="division"></div>
        <i class='bx bx-compass'></i>
        <i class='bx bxs-music'></i>
        <i class='bx bx-heart' ></i>
        <i class='bx bxs-book-bookmark'></i>
        </section>
        <section class="section__der">
            <h1>Discover New Music</h1>
            <div class="topchart">
                ${this.chargeContentTopChart()}
            </div>
            <div class="maylike"><div>
        </section>
        `
    }

    chargeContentTopChart(){
        const listaCanciones = this.trackInfo.tracks.items
        console.log(listaCanciones)
        console.log(this.trackInfo)
        return html`
            ${listaCanciones.map(val => html`
                <div class="top-chart__cont">
                <img src="${this.trackInfo.images[0].url}" class="imgtopchart">
                <p class="topchart__p">${val.name}</p>
                <p>${this.trackInfo.artists[0].name}</p>
                </div>
            `)}
        `

    }

}

customElements.define("my-topchart", Mytopchart)