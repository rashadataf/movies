// the config file where I save configurations for the API
// That I use to bring movies information and images

// here is the API base url
const BASE_API_URL = "https://api.themoviedb.org/3";
// the key is (my key) you have to get a new one
const API_KEY = "?api_key=bafb439c7191a6ccb63f591ae878df1a";

// the base url when requesting images
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
// the size of the backdrop image if we want to get one
const IMAGE_BACKDROP_SIZE = "w1280";
// the size of the poster image if we want to get one
const IMAGE_POSTER_SIZE = "w342";

export {
    BASE_API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    IMAGE_BACKDROP_SIZE,
    IMAGE_POSTER_SIZE
};