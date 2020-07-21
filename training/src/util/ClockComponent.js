import React, { useState } from "react";
let first = true
let ClockComponent = () => {
    const [clock, updateClock] = useState({time: new Date(Date.now())})
    if(first){
        setInterval(() => {
            updateClock({time: new Date(Date.now())})
        }, 1000)
        first = false
    }
    return (<div>Class Time: {clock.time.toUTCString()}</div>)
}

export default ClockComponent