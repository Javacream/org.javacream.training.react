import styles from './Footer.module.css'
import { config } from '../ApplicationContext'
import ClassClock from '../../util/components/ClassClock'
import FunctionalClock from '../../util/components/FunctionalClock'

export default function Footer(){
    return (
        <><p className = {styles.style}>{config.company}</p>
        <ClassClock></ClassClock>
        <FunctionalClock></FunctionalClock>
        </>
    )
}
