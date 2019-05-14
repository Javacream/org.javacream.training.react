import React, {useState} from 'react';
import {ClockDisplayComponent} from './ClockDisplayComponent'


let ClockComponentFunctionalStateHook = ()=> {
    const [time, setTime] = useState(new Date());
    let increment = () => {
        setTime(new Date())
    }
    setInterval(increment, 1000)
    return (<ClockDisplayComponent time={time} />)
}

export default ClockComponentFunctionalStateHook