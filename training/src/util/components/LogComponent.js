import { useEffect, useState } from "react"
import { whiteboard } from "../../books/ApplicationContext";
export default function LogComponent(props){
    const [message, updateMessage] = useState("")
    let subscription = null
    useEffect(() => {    
        function handleLogMessage(message) {
            updateMessage(message);    
        }    
        subscription = whiteboard.create.subscribe(handleLogMessage);
        return function cleanup() {
                  subscription.unsubscribe();    
                };  
        });
    return (
        <>
            <p>{message}</p>
        </>
    )
}