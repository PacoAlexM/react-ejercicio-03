import axios from 'axios'

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
const baseUrl = import.meta.env.VITE_GIPHY_API_URL;

export const giphyApi = axios.create({
    baseURL: baseUrl,
    params: {
        lang: 'es',
        api_key: apiKey,
    },
});
