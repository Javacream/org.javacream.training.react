import styles from './BooksFooter.module.css'
import ClockClassComponent from '../../util/components/ClockClassComponent';
import ClockFunctionalComponent from '../../util/components/ClockFunctionalComponent';
import Clock from '../../util/components/Clock';
export default function BooksFooter() {
    return (
      <>
      <p className={styles.background}>Javacream</p>
      <ClockFunctionalComponent />
      <ClockClassComponent />
      <Clock />
      </>
    );
  }
  