import logo from './logo.svg';
import './App.css';

export let name ="Hugo"
export function App() {
  let object = 42  //object ist eine Referenz auf ein Objekt. Das Objekt wurde durch das Literal 42 auf eine number mit Wert 42 gesetzt
  object = "Hugo" //object ist nun eine Referenz auf das String-Objekt, das mit dem Literal "..." ...
  object = (
    <>
      <div>
        <p>Hello React</p>
      </div>
      <div>
      <p>Hello World</p>
    </div>
    </>
) //Das ist das HTML-Literal
  return object;
}

