import React from 'react';


let ClockComponentFunctionalNoRerender = ()=> {
        let time = new Date(Date.now())
        let increment = () => {
            time = new Date(Date.now())
            //console.log("Time from ClockComponentFunctionalNoRerender: " + time.toUTCString())
        }
        setInterval(increment, 1000)
        return (<div>Time: {time.toUTCString()}</div>)
}

export default ClockComponentFunctionalNoRerender