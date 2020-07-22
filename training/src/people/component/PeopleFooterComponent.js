import React, { Component } from 'react';
import ClockComponent from '../../util/ClockComponent';
import LogComponent from '../../util/LogComponent';

class PeopleFooterComponent extends Component {
    render(){
        return (
            <>
                <p className='footer'>Javacream Training</p>
                <ClockComponent />
                <hr />
                <LogComponent numberOfMessages="3"/>
            </>
        );
    }
}

export function FunctionalPeopleFooterComponent () {
        return (
            <>
                <p className='footer'>Javacream Training</p>
                <ClockComponent />
                <hr />
                <LogComponent numberOfMessages="3"/>
            </>
        );    
    }


export default PeopleFooterComponent

