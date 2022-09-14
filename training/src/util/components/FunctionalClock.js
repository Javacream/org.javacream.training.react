export default function FunctionalClock(){
    const time = new Date().toUTCString()
    return 
    (
        <><p>{time}</p></>
    )
}