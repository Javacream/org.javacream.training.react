import React, {useState} from 'react';


let ClockComponentFunctionalStateHook = ()=> {
    const [time, setTime] = useState(new Date(Date.now()));
    let increment = () => {
        setTime(new Date(Date.now()))
    }
    setInterval(increment, 1000)
    return (<div>Time: {time.toUTCString()}</div>)
}

export default ClockComponentFunctionalStateHook