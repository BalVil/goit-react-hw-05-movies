import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../services/themoviedb-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomePage() {
  const [movies, setMovies] = useState[null];

  useEffect(() => {
    fetchTrending().then(data => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </>
  );
}
