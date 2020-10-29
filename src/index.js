// const path = require('path'); //One test was written in such a way that these 2 lines don't work
// const movies = require(path.join(__dirname,'data','movies.json'));
import {
    fetchWithTimeout, fetchMovies, fetchBooks,
    asyncFetchBooks, asyncFetchMovies
} from './services';
const movies = require('./data/movies.json');

// export function fetchMovies() {
//     const resolveFunction = () => movies;
//     return fetchWithTimeout(1000).then(resolveFunction); //then should receive a function
//     //which does something with a fulfillment value
//     //in this case, resolveFunction doesn't actually need any parameters
// }

// const moviePromise = fetchMovies();

// moviePromise.then(results=>{console.log(results)});

// export { fetchMovies }; //for some reason this didn't work to export the function above;
//had to pjt the export keyword instead

// Test 4.7
function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

getBooksAndMoviesPromise.then(results => {
    console.log('getBooksAndMoviesPromise', results);
})

function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error));
}

const getBooksOrMoviesPromise = getBooksOrMovies();
getBooksOrMoviesPromise.then(results => {
    console.log('getBooksOrMoviesPromise', results);
})

async function getBooksAndMoviesAsync() {
    try {
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()])
    } catch (error) {
        console.log("Error fetching books and movies", error);
    }
}