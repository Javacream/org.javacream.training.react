import React, { Component } from 'react';
import ClockComponent from '../../util/ClockComponent';

class PeopleFooterComponent extends Component {
    render(){
        return (
            <>
                <p className='footer'>Javacream Training</p>
                <ClockComponent />
            </>
        );
    }
}

export function FunctionalPeopleFooterComponent () {
        return (
            <>
                <p className='footer'>Javacream Training</p>
                <ClockComponent />
            </>
        );    
    }


export default PeopleFooterComponent

