import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
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
      <Suspense fallback={<h3 className={styles.notice}>Loading...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
