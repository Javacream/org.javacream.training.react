import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//testName: variable name
//'...' String Literal


let testName = 'renders without crashing'
//number: variable name
//42:  number Literal

let number = 42

//testSequence: variable name
//() => {} Function Literal

let testSequence = () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}

it(testName, testSequence);

