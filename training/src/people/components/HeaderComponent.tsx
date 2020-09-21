import React from 'react'
import {config, profile} from './PeopleApplicationContext'
import PersonComponent from './PersonComponent'
export function HeaderComponent() {
    const htmlFragment = (
        <div id="header">
            <p>{config.header}</p>
            <PersonComponent person={profile} detail={false} className="right"/>
        </div>
      )
    return htmlFragment
}