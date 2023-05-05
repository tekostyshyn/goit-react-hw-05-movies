import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <NavLink to="/movies" className="navlink">
            Movies
          </NavLink>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
