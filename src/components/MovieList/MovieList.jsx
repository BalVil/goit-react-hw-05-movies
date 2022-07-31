import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.css';

const MovieList = ({ movies, titlePage }) => {
  console.log(titlePage);
  const location = useLocation();

  return (
    <>
      {titlePage && <h1 className={styles.title}>{titlePage}</h1>}

      <ul className={styles.ul}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={styles.li}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
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
