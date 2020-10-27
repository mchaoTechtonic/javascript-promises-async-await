// const path = require('path'); //One test was written in such a way that these 2 lines don't work
// const movies = require(path.join(__dirname,'data','movies.json'));
import { fetchWithTimeout, fetchMovies, fetchBooks } from './services';
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