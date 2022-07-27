import { useState, useEffect } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../services/themoviedb-api';
import BackButton from 'components/BackButton/BackButton';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  console.log('movie', movie);
  const { movieId } = useParams();

  const location = useLocation();
  console.log('location', location);

  useEffect(() => {
    try {
      fetchMovieDetails(movieId).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <>
      <BackButton />
      <div>Now showing product with id - {movieId}</div>
      <ul>
        <li>
          <Link to="cast">Cast...</Link>
        </li>
        <li>
          <Link to="reviews">Reviews...</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
