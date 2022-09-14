import { useAdditionalToMovie } from 'hooks/useAdditionalToMovie';
import { fetchMovieReviews } from 'services/themoviedb-api';
import styles from './Reviews.module.css';
import { format } from 'date-fns';

const Reviews = () => {
  const reviews = useAdditionalToMovie(fetchMovieReviews);

  return (
    <>
      {!reviews && <h3 className={styles.notice}>Loading...</h3>}
      {reviews && reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content, created_at }) => (
            <li key={id}>
              <p className={styles.text}>{content}</p>
              <div className={styles.meta}>
                <p className={styles.name}>author: {author}</p>
                <p>{format(new Date(created_at), 'dd.MM.yy hh:mm')}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.notice}>
          We don`t have any reviews for this movie.
        </div>
      )}
    </>
  );
};
export default Reviews;
