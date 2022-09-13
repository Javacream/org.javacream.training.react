import styles from './Footer.module.css'
import { config } from '../ApplicationContext'

export default function Footer(){
    return (
        <><p className = {styles.style}>{config.company}</p></>
    )
}
