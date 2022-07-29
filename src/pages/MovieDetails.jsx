import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/themoviedb-api';
import BackButton from 'components/BackButton/BackButton';
import MovieContent from 'components/MovieContent/MovieContent';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      {!movie ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <BackButton />
          <MovieContent movie={movie} />
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast...</Link>
              </li>
              <li>
                <Link to="reviews">Reviews...</Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
