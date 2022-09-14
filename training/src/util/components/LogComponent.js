import { useEffect, useState } from "react"
import { whiteboard } from "../../books/ApplicationContext";
export default function LogComponent(props){
    const [message, updateMessage] = useState("")
    let logSubscription = null
    useEffect(() => {    
        function handleLogMessage(message) {
            updateMessage(message);    
        }    
        logSubscription = whiteboard.log.subscribe(handleLogMessage);
        return function cleanup() {
                  logSubscription.unsubscribe();    
                };  
        });
    return (
        <>
            <p>{message}</p>
        </>
    )
}
