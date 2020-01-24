import React, {useState} from 'react';
import {profile} from '../ApplicationContext'
import './Footer.css'
import PersonComponent from '../people/component/PersonComponent'
import { LogComponent } from '../util/component/LogComponent';
let first = true;
const Footer = () => {
    const [userProfile, updateUserProfile] = useState(profile)
    if (first){
        setTimeout(() => {
            userProfile.firstname = "CHANGED BY Footer"
            updateUserProfile({...userProfile})
            }, 5000)
        first = false    
    }
    return (
    <>
        <PersonComponent className="footer" person={userProfile} detail={false} />
        <hr />
        <LogComponent max={3} />
    </>);
}

export default Footer;