import { useEffect, useState } from "react"
import { whiteboard } from "../../books/ApplicationContext";
export default function LogComponent(){
    const [message, updateMessage] = useState("")
    useEffect(() => {    
        function handleLogMessage(message) {
            updateMessage(message);    
        }    
        const logSubscription = whiteboard.log.subscribe(handleLogMessage);
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
