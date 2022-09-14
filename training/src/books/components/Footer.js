import styles from './Footer.module.css'
import { config } from '../ApplicationContext'
import ClassClock from '../../util/components/ClassClock'
import FunctionalClock from '../../util/components/FunctionalClock'

export default function Footer(){
    return (
        <div className = {styles.style}>
            <p>{config.company}</p>
            <ClassClock></ClassClock>
            <FunctionalClock></FunctionalClock>
        </div>
    )
}
