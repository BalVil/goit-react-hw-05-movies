import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    try {
      fetchTrending().then(data => {
        setMovies(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>{movies && <MovieList movies={movies} titlePage={'Trending today'} />}</>
  );
}
