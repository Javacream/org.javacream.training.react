import React from 'react';
import {profile} from '../ApplicationContent'
import './Footer.css'
import PersonComponent from '../people/component/PersonComponent'
const Footer = () => {
    return <PersonComponent className="footer" person={profile} detail={false} />;
}

export default Footer;