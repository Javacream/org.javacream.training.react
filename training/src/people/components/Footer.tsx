import React from 'react'
import './Footer.css'
import config from '../../Configuration'
export default function Footer() {

const actualTime = new Date()
return (<
    div className="footer">
    <p>{config.company}</p>
    <p>{actualTime.toLocaleString()}</p>
    </div>
    )
}