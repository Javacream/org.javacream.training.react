import React from 'react';
import './App.css';

function App() {
  let name = "Hugo"
  let digit = 9
  let list:Array<any> = ["A", true, 42]
  list.push(42)
  list.push(true)
  let x = (
    <>
      <p>Hello</p>
      <p>World!</p>
    </>
  )

  if(true){
    x = <p>Hello World</p>
  }

  return (
    x
  );
}

export default App;
