import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
