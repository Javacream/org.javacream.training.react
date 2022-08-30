import styles from './BooksFooter.module.css'
import Clock from '../../util/components/Clock';
import LogComponent from '../../util/components/LogComponent';
export default function BooksFooter() {
    return (
      <>
      <p className={styles.background}>Javacream</p>
         <Clock />
         <LogComponent />
         
      </>
    );
  }
  