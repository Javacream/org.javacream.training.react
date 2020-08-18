import React from 'react';
import {config} from '../ApplicationContext'
export default function FooterComponent() {
    const actualTime = new Date()
    return  (
        <div id="footer">
            <p className="right">{config.company}</p>
            <p className="center"> {actualTime.toLocaleString()}</p>
        </div>
      )

}

