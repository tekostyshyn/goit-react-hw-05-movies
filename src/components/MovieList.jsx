import { Link } from 'react-router-dom';

export const MovieList = ({ movies, location }) => {
  return (
    <ul className="filmsList">
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link className="filmLink" to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
