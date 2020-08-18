import React from 'react'
import {config, profile} from '../ApplicationContext'
import PersonComponent from './PersonComponent'
export default function HeaderComponent() {
    const headerText = config.applicationName
    const htmlFragment = (
        <div id="header">
            <p>{headerText}</p>
            <PersonComponent person={profile} cssStyle="right" detail={true}/>
        </div>
      )
    return htmlFragment 
}

