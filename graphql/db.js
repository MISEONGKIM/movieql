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
    const index = movies.findIndex(movie => movie.id === id);
    if (index === -1) return false;

    movies.splice(index, 1);

    return true;
}

const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };

    movies.push(newMovie);
    return newMovie;
}
export {
    getMovies,
    getById,
    deleteMovie,
    addMovie
}