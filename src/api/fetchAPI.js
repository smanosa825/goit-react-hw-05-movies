import axios from "axios";

const API_KEY = '3ea9e05bf615fb8d96f57aa463f7f68d';
const BASE_URL = 'https://api.themoviedb.org/3';


// get Trending list (/)
// https://api.themoviedb.org/3/trending/all/day
export const getTrending = async() => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language='en-US'`);
    return response.data.results;
}   

// search for movies (/movies)
// https://api.themoviedb.org/3/search/movie
export const searchMovie = async(query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language='en-US'`);
    return response.data.results;
}   

// get movie details (/movies/:movieID)
// https://api.themoviedb.org/3/movie/${movie_id}
export const getMovieDetails = async movieID => {
    const response= await axios.get(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`);
    return response.data;
}

// get movie credits (/movies/:movieID/cast)
// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const getCasts = async movieID => {
    const response= await axios.get(`${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`);
    return response.data.cast;
}

// get movie reviews (/movies/:movieID/reviews)
// https://api.themoviedb.org/3/movie/${movie_id}/reviews
export const getReviews = async movieID => {
    const response= await axios.get(`${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`);
    return response.data.results;
}