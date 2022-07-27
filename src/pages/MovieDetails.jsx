import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchMovieDetails } from '../services/themoviedb-api';
import BackButton from 'components/BackButton/BackButton';
// import MovieContent from 'components/MovieContent/MovieContent';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      fetchMovieDetails(movieId).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  if (!movie) {
    return;
  }

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
    'https://static.wikia.nocookie.net/just-because/images/0/0c/NoImage_Available.png/revision/latest?cb=20170601005615';

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
      <BackButton />
      <div>
        <div>
          <img alt={title || name} src={imageUrl} width="240" />
        </div>
        <div>
          <div>
            <h2>
              {title || name} ({releaseDate})
            </h2>
            <p>User Score: {userScore}%</p>
          </div>

          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>

          <div></div>
          <h4>Genres</h4>
          <p>{getGenre(genres)}</p>
        </div>
      </div>

      {/* <MovieContent movie={movie} /> */}

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

      <Outlet />
    </>
  );
}
