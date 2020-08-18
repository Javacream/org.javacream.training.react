import React from 'react';
import {config} from '../ApplicationContext'
import ClockComponent from '../../util/ClockComponent'
export default function FooterComponent() {
    return  (
        <div id="footer">
            <p className="right">{config.company}</p>
            <ClockComponent />
        </div>
      )

}

