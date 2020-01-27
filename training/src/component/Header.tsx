import React from 'react';
import './Header.css';
import {headerText} from '../test/testData'

const Header = () => {
    return (
        <div className="header">{headerText}</div>
    )
}

export default Header
