import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
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
        <Outlet />
      </div>
    </>
  );
};
