import React from 'react'

export let ClockDisplayComponent = (props:any) => {
    return (<>Time: {props.time.toUTCString()}</>)
}
