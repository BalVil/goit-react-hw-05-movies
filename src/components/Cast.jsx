import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../services/themoviedb-api';

export default function Cast() {
  const { cast, setCast } = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      fetchMovieCast(movieId).then(data => {
        console.log(data);
        setCast(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  if (!cast) {
    return;
  }

  const { id, profile_path, name, character } = cast;
  return (
    <>
      <ul>
        <li key={id}>
          <img alt={name} src={profile_path} width="200" />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      </ul>
    </>
  );
}
