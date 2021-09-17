import { useState } from "react";
let FunctionalClockComponent = () => {
    const [clock, updateClock] = useState({time: new Date(Date.now())})
    setInterval(() => {
        updateClock({time: new Date(Date.now())})
    }, 1000)
    return (<div>Functional Time (Naiv): {clock.time.toUTCString()}</div>)
}

export default FunctionalClockComponent