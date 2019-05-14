import React from 'react'
import {applicationContext} from '../context/ApplicationContext'
export let StopClockComponent = () => {
    let stopClock = () => {
        applicationContext.clockComponent!.stopClock()
    }
    return (<button onClick={stopClock}>Stop</button>)
}
