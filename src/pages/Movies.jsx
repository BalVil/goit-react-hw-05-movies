import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [searchValue, setSearchValue] = useState(query);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') return;

    setLoading(true);

    fetchSearchMovies(query)
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, [query]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const queryNormalized = e.target.query.value.toLowerCase().trim();
    setSearchParams({ query: queryNormalized });
  };

  const showNoMovie = movies && movies.length < 1 && !loading;

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            onChange={handleChange}
            value={searchValue}
            type="text"
            name="query"
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {loading && <h3>Loading...</h3>}
      {error && <h3>Something went wrong. Try changing the query</h3>}
      {movies && <MovieList movies={movies} />}
      {showNoMovie && (
        <h3>
          Sorry, there are no movies matching your search query. Please change
          the request
        </h3>
      )}
    </>
  );
};

export default Movies;
