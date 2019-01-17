import React, {Component} from 'react';
import {samplePerson} from '../model/PeopleData'
class SamplePersonComponent extends Component{
    render(){
        return (
        <div>{samplePerson.info()}</div>)
    }
}

export {SamplePersonComponent}