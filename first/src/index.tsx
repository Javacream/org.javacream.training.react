import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Q from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Q />, document.getElementById('root'));
ReactDOM.render(<p>Hello</p>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
