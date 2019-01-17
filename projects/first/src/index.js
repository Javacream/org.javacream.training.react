import React from 'react';
import ReactDOM from 'react-dom';
import Goodbye from './components/Goodbye';
import {Hello} from './components/Hello';

ReactDOM.render( <
    div > < Hello / > < hr / > < Goodbye / > < /div>,
    document.getElementById('content')
);