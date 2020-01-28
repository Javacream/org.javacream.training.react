import React from 'react';
import './Footer.css'
import {userProfile} from '../ApplicationContext'
import PersonComponent from '../people/component/PersonComponent'
const Footer = () => {
    return (
        <div className="footer"><PersonComponent person={userProfile}/></div>
    )
}

export default Footer