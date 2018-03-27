import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {WelcomeComponent, PeopleComponent} from './PeopleAppComponents';
ReactDOM.render(<WelcomeComponent />, document.getElementById('welcome-content'));
ReactDOM.render(<PeopleComponent />, document.getElementById('people'));
