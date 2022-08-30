import React, { useEffect, useState } from 'react'

const Clock = () => {

    const [second, setSecond] = useState(0);

    useEffect(() =>{
        console.log("setting interval");
        setInterval(() =>{
            setSecond(second + 1)
        }, 1000)
    }, [])
    return (
        <div>
            <p className='second'>{ second }</p>
        </div>
    )
}

export default Clock