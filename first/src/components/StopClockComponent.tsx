import React from 'react'
import {applicationContext} from '../context/ApplicationContext'
export let StopClockComponent = () => {
    let stopClock = () => {
        applicationContext.clockComponent!.stopClock()
        applicationContext.stopFunction!()
    }
    return (<button onClick={stopClock}>Stop</button>)
}
