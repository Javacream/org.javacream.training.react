import styles from './Header.module.css'
import {config } from '../ApplicationContext'
import PersonComponent from '../people/components/PersonComponent'
export default function Header(){

    return (
        <div className = {styles.style}>
            <p>{config.appTitle}</p>
            <PersonComponent style={styles.profile} person={config.profile}></PersonComponent>
        </div>
    )
}
