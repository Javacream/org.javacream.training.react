import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactAppHtml from './demo/Fridolin';
import * as serviceWorker from './serviceWorker';

let slotId = 'root'
let reactApp = <><h1>Hello React</h1><ReactAppHtml /></>
ReactDOM.render(reactApp, document.getElementById(slotId));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
