import React from 'react'
import {config} from '../ApplicationContext'
export default function HeaderComponent() {
    const headerText = config.applicationName
    const htmlFragment = (
        <div id="header">
            <p>{headerText}</p>
        </div>
      )
    return htmlFragment 
}

