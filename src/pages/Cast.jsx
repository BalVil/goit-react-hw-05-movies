import { fetchMovieCast } from '../services/themoviedb-api';
import { useAdditionalToMovie } from '../hooks/useAdditionalToMovie';

const Cast = () => {
  const cast = useAdditionalToMovie(fetchMovieCast);

  return (
    <>
      {!cast && <h3>Loading...</h3>}
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  alt={name}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  width="200"
                />
              ) : (
                <div>No image</div>
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don`t have any cast for this movie.</div>
      )}
    </>
  );
};
export default Cast;
