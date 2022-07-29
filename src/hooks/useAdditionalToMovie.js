import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useAdditionalToMovie = fetch => {
  const [option, setOption] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetch(movieId)
      .then(data => {
        setOption(data);
      })
      .catch(console.log);
  }, [fetch, movieId]);
  return option;
};
