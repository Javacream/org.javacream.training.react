import React from 'react';
import { inherits } from 'util';

interface TimeInfo{
    time: Date;
}

export class ClockComponent extends React.PureComponent<{}, TimeInfo>{

    render(){
        return (<div>Time: {this.state.time.toUTCString()}</div>)
    }

    init = () => {
        setInterval(this.increment, 1000);
        return {time: new Date(Date.now())}
    }
    increment = () => {
        this.setState({time: new Date(Date.now())})
    }

    readonly state = this.init()


}