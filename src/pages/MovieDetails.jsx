import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../services/themoviedb-api';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    try {
      fetchMovieDetails(id).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return (
    <>
      <div>Now showing product with id - {id}</div>
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
