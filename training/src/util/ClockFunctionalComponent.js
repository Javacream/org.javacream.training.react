import {useState, useEffect} from 'react'

export default function ClockFunctionalComponent(){

    const [actualTime, updateTime] = useState(new Date().toUTCString())

    useEffect( () => {
        const intervalId = setInterval(() => updateTime(new Date().toUTCString()), 1000)
        return () => clearInterval(intervalId)
    }, [])
    return (
        <>
        <p>Functional: {actualTime}</p>
        </>
    )
}