import {useState, useEffect} from 'react'

export default function ClockFunctionalComponent(){
    const [actualTime, updateActualTimeFunction] = useState(new Date())

    let interval_callback = () => {updateActualTimeFunction(new Date())}
    let useEffect_callback = () => {
        const clock_interval = setInterval(interval_callback, 1000)
        return () => clearInterval(clock_interval)
    }
    
    useEffect(useEffect_callback, [])
    
    return (
        <>
            <p>{actualTime.toUTCString()}</p>
        </>
    )
}