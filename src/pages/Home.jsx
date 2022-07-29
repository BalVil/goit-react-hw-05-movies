import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrending()
      .then(data => {
        setMovies(data);
      })
      .catch(console.log);
  }, []);

  return (
    <>{movies && <MovieList movies={movies} titlePage={'Trending today'} />}</>
  );
};
export default Home;
