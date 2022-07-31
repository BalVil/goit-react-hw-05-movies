import PropTypes from 'prop-types';
import styles from './MovieContent.module.css';

const MovieContent = ({ movie }) => {
  const {
    title,
    name,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
  } = movie;

  const userScore = Math.round(vote_average * 10);

  const noImage =
    'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';

  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : noImage;

  const releaseDate = (first_air_date || release_date).slice(0, 4);

  function getGenre(genres) {
    const genreNames = genres.map(({ name }) => name);

    return genreNames.join(', ') || 'No Genre';
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.poster}>
          <img
            data-action="poster"
            alt={title || name}
            src={imageUrl}
            width="240"
          />
        </div>
        <div className={styles.desc}>
          <div className={styles.desc__item}>
            <h2 className={styles.desc__title}>
              {title || name} ({releaseDate})
            </h2>
            <p>User Score: {userScore}%</p>
          </div>

          <div className={styles.desc__item}>
            <h3 className={styles.desc__title}>Overview</h3>
            <p>{overview}</p>
          </div>

          <div className={styles.desc__item}></div>
          <h4 className={styles.desc__title}>Genres</h4>
          <p>{getGenre(genres)}</p>
        </div>
      </div>
    </>
  );
};
export default MovieContent;

MovieContent.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
    release_date: PropTypes.string.isRequired,
    first_air_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
