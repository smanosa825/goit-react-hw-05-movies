import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.navList}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? css.active : css.inactive)}
          >
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<div>Loading page... please wait</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
