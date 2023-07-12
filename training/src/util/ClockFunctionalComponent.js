import {useEffect, useState} from 'react'
export default function ClockFunctionalComponent(){

    //Was ist mein State?
    const [actualTime, updateTimeFunction] = useState(new Date().toUTCString())
    //setInterval(() => updateTimeFunction(new Date().toUTCString(), 1000)) -> BLOSS NICHT! Sie überschwemmen den Browser mit Intervals, "Ihre Lüfter läuft los"

    //Korrekt: Ersatz für Lifecyle der Component Class
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateTimeFunction(new Date().toUTCString(), 1000)
        })
        return () => clearInterval(intervalId)
    }, [])
    return (
        <>
            <p>{actualTime}</p>
        </>
    )
}