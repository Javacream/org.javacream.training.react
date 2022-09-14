import {Component} from 'react'

export default class ClassClock extends Component{
    constructor(){
        super()
        this.time = new Date().toUTCString()
    }
    render(){

        return (<><p>{this.time}</p>
</>)
    }
}