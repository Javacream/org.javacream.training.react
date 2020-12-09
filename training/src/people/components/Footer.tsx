import React from 'react'
import './Footer.css'
import config from '../../Configuration'
import Clock from '../../util/components/Clock'
import Log from '../../util/components/Log'
export default function Footer() {

return (<
    div className="footer">
    <p>{config.company}</p>
    <Clock></Clock>
    <Log></Log>
    </div>
    )
}