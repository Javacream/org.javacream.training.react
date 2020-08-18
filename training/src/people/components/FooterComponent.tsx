import React from 'react';
import {config} from '../ApplicationContext'
import {ClockComponent, HookClockComponent} from '../../util/ClockComponent'
export default function FooterComponent() {
    return  (
        <div id="footer">
            <p className="right">{config.company}</p>
            <ClockComponent />
            <HookClockComponent />
        </div>
      )

}

