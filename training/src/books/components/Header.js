import styles from './Header.module.css'
import {config } from '../ApplicationContext'
export default function Header(){

    return (
        <><p className = {styles.style}>{config.appTitle}</p></>
    )
}
