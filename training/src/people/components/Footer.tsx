import React from 'react'
import './Footer.css'
import config from '../../Configuration'
import Clock from '../../util/components/Clock'
export default function Footer() {

return (<
    div className="footer">
    <p>{config.company}</p>
    <Clock></Clock>
    </div>
    )
}