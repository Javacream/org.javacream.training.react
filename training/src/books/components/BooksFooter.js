import styles from './BooksFooter.module.css'
import NotWorkingClockApp from '../../util/components/NotWorkingClockComponent';
export default function BooksFooter() {
    return (
      <>
      <p className={styles.background}>Javacream</p>
      <NotWorkingClockApp />
      </>
    );
  }
  