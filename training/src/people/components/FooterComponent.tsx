import React from 'react';
import {config} from '../ApplicationContext'
import {ClockComponent} from '../../util/ClockComponent'
import LogComponent from '../../util/LogComponent'
export default function FooterComponent() {
    return  (
        <div id="footer">
            <p className="right">{config.company}</p>
            <ClockComponent />
            <LogComponent />
        </div>
      )

}

