import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

export default function MovieList({ movies }) {
  return (
    <>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.ul}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={styles.li}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};
