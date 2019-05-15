import React, {useState} from 'react';
import {ClockDisplayComponent} from './ClockDisplayComponent'
import {applicationContext} from '../context/ApplicationContext'
let interval: any
let stopClock = () => {
    console.log("stopping interval " + interval)
    clearInterval(interval)
    interval = undefined
}
let increment:any
let ClockComponentFunctionalStateHook = () => {
    const [time, setTime] = useState(new Date());
    increment = () => {
        setTime(new Date())
    }
    console.log("starting interval " + interval)

    if (!interval){
        interval = setInterval(increment, 1000)
    } 

    return (<ClockDisplayComponent time={time} />)
}

applicationContext.stopFunction = stopClock
export default ClockComponentFunctionalStateHook