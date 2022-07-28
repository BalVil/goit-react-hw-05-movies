import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/themoviedb-api';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      fetchMovieCast(movieId).then(data => setCast(data));
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
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
    </>
  );
}
