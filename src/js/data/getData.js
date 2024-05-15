import { LitElement } from "lit";

export class GetDataTracks extends LitElement{

    static get properties() {
        return {
            url: {type: String},
            method: {type: String}
        }
    }

    firstUpdated() {
        this.getData();
    }

    _sendDataTracks(data){
        this.dispatchEvent(new CustomEvent("ApiData", {
            detail: data,
            bubbles: true,
            composed: true
        }));
    }

    async getData() {

        const url = 'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b92047cc4dmsh664196f27e89cd3p1d206fjsn0288330841f9',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            this._sendDataTracks(result.tracks);
        } catch (error) {
            console.error(error);
        }

    }

}

customElements.define('get-data', GetDataTracks)