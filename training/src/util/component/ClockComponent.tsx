import React from 'react';

interface TimeInfo{
    time: Date;
}

export default class ClockComponent extends React.PureComponent<{}, TimeInfo>{
    readonly state = {time: new Date(Date.now())}
    render(){
    return (<div>Class Time: {this.state.time.toUTCString()}</div>)
    }
    componentDidMount(){
        setInterval(() => this.setState({time: new Date(Date.now())}), 1000);
    }
}
