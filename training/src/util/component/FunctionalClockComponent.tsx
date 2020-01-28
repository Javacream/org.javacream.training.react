import React, {useState} from 'react';

let initialized = false
const FunctionalClockComponent = () => {

    let [state, updateTime] = useState({time: new Date(Date.now())})
    if (! initialized){
        setInterval(() => updateTime({time: new Date(Date.now())}), 1000);
        initialized = true;
    }
    return (
        <div>Functional Time: {state.time.toUTCString()}</div>
    )

    
}

export default FunctionalClockComponent