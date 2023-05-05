import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchByQuery } from 'services/api';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryValue = searchParams.get('query') ?? '';

  const handleSubmit = async e => {
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
      <form className='searchForm' onSubmit={handleSubmit}>
        <input className='input' type="text" name="query" />
        <button className='searchButton' type="submit">Search</button>
      </form>
      {films.length > 0 && (
        <ul className='filmsList'>
          {films.map(film => (
            <li key={film.id}>
              <Link className='filmLink' to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
