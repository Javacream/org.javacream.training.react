import React from 'react';
import ReactDOM from 'react-dom';
import Goodbye from './components/Goodbye';
import {Hello} from './components/Hello';
import {SamplePersonComponent} from './components/SamplePersonComponent';
import {PeopleComponent} from './components/PeopleComponent';

ReactDOM.render( 
    <div>
        <Hello /> 
        <hr /> 
        <Goodbye />
        <hr /> 
        <SamplePersonComponent />
        <hr /> 
        <PeopleComponent />
    </div>,
    document.getElementById('content')
)