import React from 'react';
import './App.css';


let createMessage = function() {
  return "REACT, normal"
}

createMessage = () => { //Diese Schreibweise entspricht den Methoden-Definitionen z.B. in Java
  return "REACT, no param with Arrow"
}

let f = createMessage

export default function AppComponent() {
  let message = f(42)
  let htmlFragment = <><h1>{message}</h1><div className="App">Please Learn React!</div></> //HTML-Literal, Wird als JSX-Ausdruck in normales JS transpiliert
  return (
    htmlFragment
  );
}

