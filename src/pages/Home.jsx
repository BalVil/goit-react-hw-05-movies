import { useState, useEffect } from 'react';
import { fetchTrending } from '../services/themoviedb-api';
import MovieList from 'components/MovieList/MovieList';
import styles from 'components/SharedLayout/SharedLayout.module.css';

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
    <div className={styles.container}>
      {movies && <MovieList movies={movies} titlePage={'Trending today'} />}
    </div>
  );
};
export default Home;
