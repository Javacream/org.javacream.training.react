import React from 'react';
import {config} from './PeopleApplicationContext'
import ClockComponent from './ClockComponent'
import LogComponent from './LogComponent'
export function FooterComponent() {
    return  (
        <div id="footer">
            <p className="center">{config.company}</p>
            <ClockComponent  />
            <LogComponent />
        </div>
      )

}