import styles from './BooksHeader.module.css'
import {useState} from 'react'
import PersonComponent from '../../people/PersonComponent';
import { defaultUser } from '../ApplicationContext';
export default function BooksHeader() {
    const [person, updatePerson] = useState(defaultUser)
    return (
      <>
      <p className={styles.background}>B O O K S</p>
      <PersonComponent lastname={person.lastname} firstname={person.firstname} />
      </>
    );
  }
  