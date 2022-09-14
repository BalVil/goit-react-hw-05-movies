import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../services/themoviedb-api';
import BackButton from 'components/BackButton/BackButton';
import MovieContent from 'components/MovieContent/MovieContent';
import Additional from 'components/Additional/Additional';
import styles from 'components/SharedLayout/SharedLayout.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  const linkText = ['cast', 'reviews'];

  return (
    <div className={styles.container}>
      {movie && (
        <>
          <BackButton backLink={backLinkHref} />

          <MovieContent movie={movie} />

          <Additional
            options={linkText}
            location={backLinkHref}
            title="Additional information"
          />

          <Suspense fallback={<h3>Loading...</h3>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
};
export default MovieDetails;
