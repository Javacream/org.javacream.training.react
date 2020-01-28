import React from 'react';
import './Header.css';
import {headerText} from '../ApplicationContext'
import ClockComponent from '../util/component/ClockComponent'
const Header = () => {
    return (
        <div className="header">{headerText}<ClockComponent /></div>
    )
}

export default Header
