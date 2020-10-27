export function fetchWithTimeout(delay) {
    return new Promise(resolve => setTimeout(resolve,delay)); //setTimeout() executes the function resolve, after delay
}