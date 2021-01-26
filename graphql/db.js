import fetch from 'node-fetch';
const API_URL = 'https://yts.mx/api/v2/list_movies.json';


const getMovies = (limit, rating) => {
    let parameter = ''
    if (limit > 0) {
        parameter += `limit=${limit}`
    } 
    if (rating > 0) {
        parameter.length > 0 ? parameter += '&' : '';
        parameter += `minimum_rating=${rating}`
    }
    const request_uri = parameter.length > 0 ? `${API_URL}?${parameter}` : API_URL
    return fetch(request_uri).then(res => res.json()).then(json => json.data.movies);
};

export {
    getMovies
}