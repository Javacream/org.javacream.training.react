import { useEffect, useState } from "react"

export default function FunctionalClock(){
    const [time, updateTime] = useState(new Date().toUTCString())
    useEffect(() => {
        const intervalId = setInterval(() => updateTime(new Date().toUTCString()), 1000 )
        return () => clearInterval(intervalId)
    }, [])
    return (
        <><p>{time}</p></>
    )
}