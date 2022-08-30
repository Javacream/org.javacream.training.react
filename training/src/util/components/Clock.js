import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() =>{
        console.log("setting interval");
        setInterval(() =>{
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <p className='second'>{ date.toUTCString() }</p>
        </div>
    )
}

export default Clock