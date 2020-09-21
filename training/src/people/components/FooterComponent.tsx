import React from 'react';
import {config} from './PeopleApplicationContext'

export function FooterComponent() {
    return  (
        <div id="footer">
            <p className="center">{config.company}</p>
        </div>
      )

}