let first = true
export default function NotWorkingClockApp() {
    let actualTime = new Date()
    if (first){
        first = false
        setInterval (() => {actualTime = new Date(); console.log(actualTime);}, 10000)
        
    }
    return (
      <>
        <p>{actualTime.toUTCString()}</p>
      </>
    );
  }
  