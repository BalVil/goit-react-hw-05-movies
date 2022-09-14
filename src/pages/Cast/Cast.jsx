import { fetchMovieCast } from 'services/themoviedb-api';
import { useAdditionalToMovie } from 'hooks/useAdditionalToMovie';
import styles from './Cast.module.css';

const Cast = () => {
  const cast = useAdditionalToMovie(fetchMovieCast);

  const noImage =
    'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg';

  return (
    <>
      {!cast && <h3 className={styles.notice}>Loading...</h3>}
      {cast && cast.length > 0 ? (
        <ul className={styles.list}>
          {cast.map(({ id, profile_path, name, character }) => (
            <li className={styles.actor} key={id}>
              {profile_path ? (
                <img
                  alt={name}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width="200"
                />
              ) : (
                <img alt="noImage" src={noImage} width="200" />
              )}
              <p className={styles.name}>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.notice}>
          We don`t have any cast for this movie.
        </div>
      )}
    </>
  );
};
export default Cast;
