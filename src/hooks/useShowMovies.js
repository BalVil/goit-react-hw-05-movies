import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/themoviedb-api';

export const useShowMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [searchValue, setSearchValue] = useState(query);
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') return;

    setLoading(true);

    fetchSearchMovies(query)
      .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        console.log(error);
      });
  }, [query]);

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const queryNormalized = e.target.query.value.toLowerCase().trim();
    setSearchParams({ query: queryNormalized });
  };

  const showNoMovie = movies && movies.length < 1 && !loading;

  return {
    movies,
    searchValue,
    loading,
    error,
    handleChange,
    handleSubmit,
    showNoMovie,
  };
};
