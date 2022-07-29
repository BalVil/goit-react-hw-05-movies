import { useAdditionalToMovie } from '../hooks/useAdditionalToMovie';
import { fetchMovieReviews } from '../services/themoviedb-api';

export default function Reviews() {
  const reviews = useAdditionalToMovie(fetchMovieReviews);

  return (
    <>
      {!reviews && <h3>Loading...</h3>}
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don`t have any reviews for this movie.</div>
      )}
    </>
  );
}
