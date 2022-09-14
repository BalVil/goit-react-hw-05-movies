import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MovieList from 'components/MovieList/MovieList';
import { useShowMovie } from 'hooks/useShowMovies';
import styles from 'components/SharedLayout/SharedLayout.module.css';

const Movies = () => {
  const {
    movies,
    searchValue,
    error,
    loading,
    handleChange,
    handleSubmit,
    showNoMovie,
  } = useShowMovie();

  return (
    <div className={styles.container}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 2, width: '36ch' },
          display: 'flex',
          justifyContent: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          value={searchValue}
          type="text"
          name="query"
          label="Search movie"
          variant="standard"
          color="warning"
        />
      </Box>

      {loading && <h3 className={styles.notice}>Loading...</h3>}
      {error && (
        <h3 className={styles.notice}>
          Something went wrong. Try changing the query
        </h3>
      )}
      {movies && <MovieList movies={movies} />}
      {showNoMovie && (
        <h3 className={styles.notice}>
          Sorry, there are no movies matching your search query. Please change
          the request
        </h3>
      )}
    </div>
  );
};

export default Movies;
