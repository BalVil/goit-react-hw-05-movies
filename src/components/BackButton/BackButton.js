import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './BackButton.module.css';

export default function BackButton() {
  return (
    <button className={styles.button}>
      <Link to={'/'} className={styles.link}>
        <IoMdArrowRoundBack className={styles.svg} size={16} />
        Go back
      </Link>
    </button>
  );
}
