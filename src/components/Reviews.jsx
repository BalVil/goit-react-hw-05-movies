import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/themoviedb-api';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      fetchMovieReviews(movieId).then(data => {
        setReviews(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length > 0 ? (
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
