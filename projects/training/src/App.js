import React from 'react';
import logo from './logo.svg';
import './App.css';
//Functional React Component named Ap
let Ap = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React at once!
      </header>
    </div>
  )
}

//Functional React Component named AnotherApp

function demo(){
  return "Hello from Demo Function"
}
let AnotherApp = () => {
  const state = true
  let htmlLiteral = ""
  if (state){
     htmlLiteral =  (<h1>{demo()}</h1>)
  }
  else{
    htmlLiteral =  (<h3>{demo()}</h3>)
  }  
return htmlLiteral
}

class FullComponent extends React.Component{
  constructor(){
    super()  
  }

  render (){
    return (<h1>From FullComponent</h1>)

  }
}
export {Ap, AnotherApp, FullComponent};
