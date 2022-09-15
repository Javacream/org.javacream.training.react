import styles from './Header.module.css'
import {config, whiteboard } from '../ApplicationContext'
import PersonComponent from '../people/components/PersonComponent'
import { useEffect, useState } from 'react'


export default function Header(){
    const [person, personUpdate] = useState("")
    useEffect(() => {
        const subscription = whiteboard.profileChanged.subscribe(profile => personUpdate(profile))
        return () => subscription.unsubscribe()
    }, [])
    return (
        <div className = {styles.style}>
            <p>{config.appTitle}</p>
            <PersonComponent style={styles.profile} person={person}></PersonComponent>
        </div>
    )
}
