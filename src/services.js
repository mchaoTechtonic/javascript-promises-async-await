export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve, delay)); //setTimeout() executes the function resolve, after delay
}

export function fetchMovies() {
    return fetch("./data/movies.json")
        .then(response => response.json()) //this turns the response body into a json object
        .then(movies => movies)
        .catch(error => console.log(error));
}

export async function asyncFetchMovies() {
    try {
        const response = await fetch("./data/movies.json");
        const results = await response.json();
        return results;
    } catch (error) {
        console.log(error);
    }
}

export function fetchBooks() {
    return fetch("./data/books.json")
        .then(response => response.json())
        .then(books => books)
        .catch(error => console.log(error));
}