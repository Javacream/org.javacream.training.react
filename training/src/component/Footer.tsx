import React from 'react';
import './Footer.css'
import {userProfile} from '../ApplicationContext'

const Footer = () => {
    return (
        <div className="footer">{userProfile.firstname} {userProfile.lastname}</div>
    )
}

export default Footer