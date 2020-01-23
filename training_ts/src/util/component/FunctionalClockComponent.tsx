import React, {useState} from 'react';

let initialized = false;
const FunctionalClockComponent = () => {
    const [clock, updateTime] = useState({time: new Date(Date.now())})
    let increment = () => {
        updateTime({time: new Date(Date.now())})
    }
    if (!initialized){
        setInterval(increment, 1000);
        initialized = true;
    }

    return (
        <div>Functional Time: {clock.time.toUTCString()}</div>
    )
}

export default FunctionalClockComponent