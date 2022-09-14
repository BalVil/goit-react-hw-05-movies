import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.css';

const MovieItem = ({ movieTitle, movieId, moviePoster }) => {
  const location = useLocation();

  const imageUrl = moviePoster
    ? `https://image.tmdb.org/t/p/w500${moviePoster}`
    : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';

  return (
    <Link
      className={styles.link}
      to={`/movies/${movieId}`}
      state={{ from: location }}
    >
      <li className={styles.item}>
        <img className={styles.poster} src={imageUrl} alt="" />
        <p className={styles.title}>{movieTitle}</p>
      </li>
    </Link>
  );
};
export default MovieItem;

MovieItem.propTypes = {
  movieTitle: PropTypes.string,
  movieId: PropTypes.number.isRequired,
  moviePoster: PropTypes.string,
};
