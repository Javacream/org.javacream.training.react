import { useState } from "react";

let first = true
export default function ClockFunctionalComponent() {
    const [actualDate, setDate] = useState(new Date())
    if (first){
        setInterval(() => {setDate(new Date()); console.log("FunctionalComponent: " + actualDate)}, 5000)
        first = false
    }
    return (
      <>
      <p>{actualDate.toUTCString()}</p>
      </>
    );
  }