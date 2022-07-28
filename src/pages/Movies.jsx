import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '') return;

    setMovies(null);

    try {
      fetchSearchMovies(query).then(data => {
        console.log(data);
        setMovies(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();
    setSearchParams({ query: queryNormalized });

    form.reset();
  };

  console.log(query);
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <input
            type="text"
            name="query"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
