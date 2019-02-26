import React from 'react';

interface TimeInfo{
    time: Date;
}

export class ClockComponent extends React.PureComponent<{}, TimeInfo>{

    readonly state = {time: new Date(Date.now())}

    render(){
        return (<div>Time: {this.state.time.toDateString()}</div>)
    }
}