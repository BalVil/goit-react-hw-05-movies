import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem/MovieItem';
import styles from './MovieList.module.css';

const MovieList = ({ movies, titlePage }) => {
  return (
    <>
      {titlePage && <h1 className={styles.title}>{titlePage}</h1>}

      <ul className={styles.ul}>
        {movies.map(({ id, title, name, poster_path }) => (
          <MovieItem
            key={id}
            movieTitle={title || name}
            movieId={id}
            moviePoster={poster_path}
          />
        ))}
      </ul>
    </>
  );
};
export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
  titlePage: PropTypes.string,
};
