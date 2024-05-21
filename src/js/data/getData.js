import { LitElement } from "lit";
export async function obtenerDatosSpotify(){

    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=10fK7tb1RHB2DJh26kxEDA';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b92047cc4dmsh664196f27e89cd3p1d206fjsn0288330841f9',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	return result.albums[0]
} catch (error) {
	console.error(error);
}


}

