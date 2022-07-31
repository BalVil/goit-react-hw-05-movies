import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './BackButton.module.css';

const BackButton = ({ backLink }) => {
  return (
    <>
      <Link to={backLink} className={styles.link}>
        <IoMdArrowRoundBack className={styles.svg} size={16} />
        Go back
      </Link>
    </>
  );
};

export default BackButton;

BackButton.propTypes = {
  backLink: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    hash: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};
