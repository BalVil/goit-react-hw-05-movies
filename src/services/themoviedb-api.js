import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=5f364d2fc6b25c805674b50a1c63d59e';

// async function fetchWithErrorHandling() {
//   const response = await fetch();
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('Not found'));
// }

export const fetchTrending = async () => {
  const response = await axios.get(`${BASE_URL}/trending/all/day?${API_KEY}`);
  console.log(response.data);
  return response.data;
};

fetchTrending();

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
