import { LitElement } from "lit";
export async function obtenerDatosSpotify(){

    const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b92047cc4dmsh664196f27e89cd3p1d206fjsn0288330841f9',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const track = data.tracks[0];

        const trackInfo = {
            name: track.name,
            duration: track.duration_ms,
            artist: track.artists[0].name,
            img: track.album.images[0].url
        }

        return trackInfo

    } catch(error){
        console.error(error);
        return null;
    }

}

