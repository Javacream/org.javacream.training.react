import styles from './Header.module.css'
import {config } from '../ApplicationContext'
import PersonComponent from '../people/components/PersonComponent'
import { useEffect, useState } from 'react'


export default function Header(){
    const [person, personUpdate] = useState("")
    useEffect(() => {
        const getData = async () => {
            const person = await config.profile
            personUpdate(person)
        }
        getData()
    }, [])
    return (
        <div className = {styles.style}>
            <p>{config.appTitle}</p>
            <PersonComponent style={styles.profile} person={person}></PersonComponent>
        </div>
    )
}
