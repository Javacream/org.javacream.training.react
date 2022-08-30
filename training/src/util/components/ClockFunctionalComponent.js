import { useState } from "react";

//SCRATCH
export default function ClockFunctionalComponent() {
    const [actualDate, setDate] = useState(new Date())
    setInterval(() => setDate(new Date()), 990)
    return (
      <>
      <p>{actualDate.toUTCString()}</p>
      </>
    );
  }