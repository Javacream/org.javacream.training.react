import React from 'react';

import {ClockDisplayComponent} from './ClockDisplayComponent'
import {applicationContext} from '../context/ApplicationContext'
interface TimeInfo{
    time: Date;
}

export default class ClockComponent extends React.PureComponent<{}, TimeInfo>{
    interval:any

    render(){
        return (<ClockDisplayComponent time={this.state.time} />)
    }

    init = () =>{
        this.interval = setInterval(this.increment, 1000)
        return {time: new Date()}
    }
    increment = () => {
        this.setState({time: new Date()})
    }

    readonly state = this.init()

    stopClock = () => {
        clearInterval(this.interval)
        console.log(`clearing interval ${this.interval}`)
    }

    componentDidMount(){
        console.log("componentDidMount")
        applicationContext.clockComponent = this
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
        this.stopClock()
        applicationContext.clockComponent = undefined
    }

}