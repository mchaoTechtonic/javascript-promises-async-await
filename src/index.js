// const path = require('path'); //One test was written in such a way that these 2 lines don't work
// const movies = require(path.join(__dirname,'data','movies.json'));
import {fetchWithTimeout} from './services';
const movies = require('./data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;
}



// export { fetchMovies }; //for some reason this didn't work to export the function above;
//had to pjt the export keyword instead