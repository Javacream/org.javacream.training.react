import { useEffect, useState } from "react";
import {peopleLog} from "../people/PeopleContext";

export default function LogComponent(){
    const [log, updateLog] = useState("")
    useEffect(() => {
        const subId = peopleLog.subscribe(m => updateLog(m))
        return () => subId.unsubscribe()

    }, [])

    return (
        <>
            <p>{log}</p>
        </>
    )
}