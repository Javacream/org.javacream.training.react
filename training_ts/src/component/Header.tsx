import React from 'react';
import {header} from '../ApplicationContext'
import './Header.css'
import ClockComponent from '../util/component/ClockComponent'
import FunctionalClockComponent from '../util/component/FunctionalClockComponent'
const Header = () => {
    return (<><p className="header">{header}</p><ClockComponent /><FunctionalClockComponent /></>
    );
}

export default Header;