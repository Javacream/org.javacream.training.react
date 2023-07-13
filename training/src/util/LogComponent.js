import { useEffect, useState } from "react";
import { whiteboard } from "../people/PeopleContext";

export default function LogComponent(){
    const [log, updateLog] = useState("")
    useEffect(() => {
        const subId = whiteboard.log.subscribe(m => updateLog(m))
        return () => subId.unsubscribe()

    }, [])

    return (
        <>
            {log}
        </>
    )
}
