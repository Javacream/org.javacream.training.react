import React from 'react';
import {profile} from '../ApplicationContent'
import './Footer.css'
const Footer = () => {
return <p>Hello {profile.firstname} {profile.lastname}</p>;
}

export default Footer;