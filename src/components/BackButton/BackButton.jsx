import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './BackButton.module.css';

const BackButton = ({ backLink }) => {
  return (
    <>
      <button type="button" className={styles.button}>
        <Link to={backLink} className={styles.link}>
          <IoMdArrowRoundBack className={styles.svg} size={16} />
          Go back
        </Link>
      </button>
    </>
  );
};

export default BackButton;
