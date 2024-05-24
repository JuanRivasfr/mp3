import { LitElement } from "lit";
let cachedData = null;

async function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function obtenerDatosSpotify(reintentos = 5) {
    if (cachedData) {
        return cachedData;
    }

    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=10fK7tb1RHB2DJh26kxEDA';
	const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b947e3defmshe5754d5b008abd8p16da69jsn814f51c32eed',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        if (response.status === 429) {
            const retryAfter = response.headers.get('Retry-After');
            let waitTime = retryAfter ? parseInt(retryAfter) * 1000 : 3000;
            if (reintentos > 0) {
                await esperar(waitTime);
                return obtenerDatosSpotify(reintentos - 1);
            } else {
                throw new Error('Demasiados reintentos, por favor intente de nuevo más tarde.');
            }
        } else if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        } else {
            const result = await response.json();
            if (result && result.albums && result.albums[0]) {
                cachedData = result.albums[0];
                return cachedData;
            } else {
                throw new Error('Datos de álbum no encontrados o formato no válido');
            }
        }
    } catch (error) {
        console.error('Error al obtener datos de Spotify:', error);
        return null;
    }
}
