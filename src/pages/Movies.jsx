import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchByQuery } from 'services/api';
import { MovieList } from 'components/MovieList';
import { Form } from 'components/Form';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryValue = searchParams.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.query.value;
    if (inputValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: inputValue });
  };

  useEffect(() => {
    if (queryValue === '') {
      setFilms([]);
    }

    const fetchData = async () => {
      try {
        const response = await fetchByQuery(queryValue);
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [queryValue]);

  return (
    <div>
      <Form
        onSubmit={e => {
          handleSubmit(e);
        }}
      />
      {films.length > 0 && <MovieList movies={films} location={location} />}
    </div>
  );
};

export default Movies;
