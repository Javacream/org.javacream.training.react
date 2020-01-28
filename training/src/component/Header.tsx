import React from 'react';
import './Header.css';
import {headerText} from '../ApplicationContext'
import ClockComponent from '../util/component/ClockComponent'
import FunctionalClockComponent from '../util/component/FunctionalClockComponent'
const Header = () => {
    return (
        <div className="header">{headerText}<ClockComponent />
        <FunctionalClockComponent />
        </div>
    )
}

export default Header
