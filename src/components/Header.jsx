import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Header = () => {
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
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default Header;
