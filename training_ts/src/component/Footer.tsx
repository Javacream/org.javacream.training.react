import React, {useState} from 'react';
import {profile} from '../ApplicationContext'
import './Footer.css'
import PersonComponent from '../people/component/PersonComponent'
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
    return <PersonComponent className="footer" person={userProfile} detail={false} />;
}

export default Footer;