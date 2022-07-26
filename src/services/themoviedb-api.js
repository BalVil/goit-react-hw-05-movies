import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';

export const fetchTrending = async () => {
  const response = await axios.get(`${BASE_URL}/trending/all/day?${API_KEY}`);
  // console.log(response.data);
  return response.data;
};

export const fetchSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?${API_KEY}&query=${query}&language=en-US`
  );
  return response.data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?${API_KEY}&language=en-US`
  );
  // console.log(response.data);
  return response.data;
};

// export const fetchMovieCast = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/credits?${API_KEY}&language=en-US`
//   );
//   return response.data;
// };

// export const fetchMovieReviews = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/movie/${movieId}/reviews?${API_KEY}&language=en-US`
//   );
//   return response.data;
// };
