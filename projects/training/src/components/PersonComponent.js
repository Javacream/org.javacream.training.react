import React, {Component} from 'react';
class PersonComponent extends Component{
    render(){
        return (
        <div>{this.props.person.info()}</div>)
    }
}

export {PersonComponent}