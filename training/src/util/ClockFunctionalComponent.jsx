import {useState, useEffect} from 'react'

export default function ClockFunctionalComponent(){
    const [actualTime, updateActualTimeFunction] = useState(new Date())
    
    useEffect(() => {
        const clock_interval = setInterval(() => {updateActualTimeFunction(new Date())}, 1000)
        return () => clearInterval(clock_interval)
    }, [])
    
    return (
        <>
            <p>{actualTime.toUTCString()}</p>
        </>
    )
}