const movies = [{
    id : 0,
    name : "Star Wars",
    score : 1
},
{
    id : 1,
    name : "Avengers",
    score : 8
},
{
    id : 2,
    name : "The Codfather",
    score : 99
}];

const getMovies = () => movies;

const getById = (id) => {
    return movies.filter(movie => movie.id === id)[0];
}

const deleteMovie = (id) => {
    movies.splice(movies.findIndex(movie => movie.id === id), 1);
}
export {
    getMovies,
    getById,
    deleteMovie
}