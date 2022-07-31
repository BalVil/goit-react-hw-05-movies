import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Additional.module.css';

export const Additional = ({ options, location, title }) => {
  return (
    <div className={styles.wrap}>
      <h4 className={styles.heading}>{title}</h4>
      <ul>
        {options.map(option => (
          <li className={styles.item} key={option}>
            <Link to={option} state={{ from: location }}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Additional;

Additional.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
