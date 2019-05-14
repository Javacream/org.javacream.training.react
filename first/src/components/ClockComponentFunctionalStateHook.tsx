import React, {useState} from 'react';


let ClockComponentFunctionalStateHook = ()=> {
    const [time, setTime] = useState(new Date());
    let increment = () => {
        setTime(new Date())
    }
    setInterval(increment, 1000)
    return (<div>Time: {time.toUTCString()}</div>)
}

export default ClockComponentFunctionalStateHook