import React from 'react';
import {header} from '../ApplicationContent'
import './Header.css'
import ClockComponent from '../util/component/ClockComponent'
const Header = () => {
    return (<><p className="header">{header}</p><ClockComponent /></>
    );
}

export default Header;